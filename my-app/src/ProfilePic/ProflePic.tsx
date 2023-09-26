
import React from "react";
import './ProfilePic.css'
import { useState, useEffect } from "react";
import axios from 'axios'

const name:string = 'Siamese';
const apiURL:string = `https://api.api-ninjas.com/v1/cats?name=${name}`
const apiKey:string = 'ssD5r3FiaUPjT+DF0fXGSA==7xUMInvFtnKCQkLc';

const ProfilePic: React.FC = ()=>{

    const[imageURL, setImageURL] = useState<string>(' ');
    const[loading, setLoading] = useState<boolean>(true);


    
    useEffect(()=>{
        async function getImageURL(){
            const response= await axios.get(apiURL,{
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                },
            });
            if (Array.isArray(response.data) && response.data.length > 0) {
                const catInfo = response.data[0];
                const imageLink = catInfo.image_link;
                setImageURL(imageLink)
                console.log('Image Link:', imageLink);
            } else {
                console.error('Cat data not found or empty.');
            }
            setLoading(false);
            }
            getImageURL();
        }, [])

    return(
        <>
        <div className="image">
        {loading ? (
            <p>Loading...</p>
        ) : (
            <img className="catImage" src={imageURL} alt="Cat Image" height="100%" width="100%" />
        )}
        </div>
        </>
    )

}

export default ProfilePic