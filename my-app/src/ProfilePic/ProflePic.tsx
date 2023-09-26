
import React from "react";
import './ProfilePic.css'
import { useState, useEffect } from "react";

const ProfilePic = ()=>{

    const[imageURL, setImageURL] = useState<string>(' ');
    const[loading, setLoading] = useState<boolean>(true);

    
    useEffect(()=>{
        const name = 'Siamese';
        const apiKey = 'ssD5r3FiaUPjT+DF0fXGSA==7xUMInvFtnKCQkLc';

        fetch(`https://api.api-ninjas.com/v1/cats?name=${name}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
        },
        })
        .then((response) => response.json())
        .then((data) => {
            
        if (Array.isArray(data) && data.length > 0) {
            const catInfo = data[0];
            const imageLink = catInfo.image_link;
            setImageURL(imageLink)
            console.log('Image Link:', imageLink);
        } else {
            console.error('Cat data not found or empty.');
        }

        setLoading(false);
            })
        .catch((error) => {
            console.error('Error fetching cat data:', error);
            setLoading(false);
        });
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