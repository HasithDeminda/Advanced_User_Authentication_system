import React from 'react'
import './starting.css'
import backgroundTheme from '../../assets/videos/video1.mp4'

export default function Starting() {
    return (
        <div className="header">
        
        <video autoPlay loop muted
        style={{
            position:'absolute',
            width:'100%',
            left:'50%',
            top:'50%',
            height:'100%',
            objectFit:'cover',
            transform:'translate(-50%, -50%)',
            zIndex:'0'
            
        }}
        >
        <source src={backgroundTheme} type="video/mp4"/>
        </video>
        

            <nav>
                <img src="../../assets/img/logo.png" className="logo" alt=""/>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Contact</a></li>
                    <li className="signup">Log In</li>
                    
                </ul>
            </nav>
            <div className="content">
                <h1>Welcome to Global Education</h1>
                <form>
                    
                    <button type="submit" href="/login" >Login Here</button>
                    
                </form>
            </div>
        </div>
    )
}