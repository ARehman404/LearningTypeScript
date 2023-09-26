import React from "react";
import './Main.css'
import { useContext } from "react";
import { ThemeContext} from "../App";





const Main:React.FC = ()=>{

    const themeContext = useContext(ThemeContext)
    const{theme, toggleTheme} = themeContext || {theme:'light' , toggleTheme: ()=> {}}
    return(
        <>
            <div className="main">
                <div className="facts">
                    <div className="fact" id={theme}>
                        <p className="title">Age</p>
                        <p className="info">3 months</p>
                    </div>
                    <div className="fact" id={theme}>
                        <p className="title">Weight</p>
                        <p className="info">2 kg</p>
                    </div>
                    <div className="fact" id={theme}>
                        <p className="title">Sex</p>    
                        <p className="info">Female</p>
                    </div>    
                </div> 

                <div className="location">
                    <div className="pet-name">
                        <p className="pet-firstname">Nora</p>
                        <p className="pet-surname">Corgi</p>
                    </div>
                    <div className="addr">
                        <img src="/location-logo.png" alt="" className="logo" height='25px' width='25px'/>
                        <p className="address">110 N 3th St, Brookllyn, NY, USA</p>
                    </div>
                </div> 

                <div className="About">
                    <p className="about-header">About</p>
                    <p className="pet-description">
                    The dog is a pet animal. A dog has sharp teeth so that it can 
                    eat flesh very easily, it has four legs, two ears, two eyes, a 
                    tail, a mouth, and a nose. It is a very clever animal and is very 
                    useful in catching thieves. It runs very fast, barks loudly and 
                    attacks the strangers.
                    </p>
                </div>

                <div className="footer">
                    <div className="adopt">
                        <button className="adopt-btn">
                        <img src="/paw.png" alt="Paw Image" className="adopt-logo" height='25px' width='25px'/>
                        <p>Adopt</p>
                        </button>
                    </div>
                    
                    <div className="call">
                        <button className="call-btn">
                            Call
                        {/* <img src="" alt="" className="call-logo" height='25px' width='25px'/> */}
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Main