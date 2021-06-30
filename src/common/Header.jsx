import React from 'react'
import logo1 from '../images/logo1.png'

function Header() {
    return (
        <>
            <nav>
                <div className="left-side-menu">
                    <div className="logo">
                    <a href="#">
                        <img src={logo1} alt="logo" />
                    </a>
                    </div>
        
                    <div className="sub-menu">
                    <a href="#">
                        <li>Home</li>
                    </a>
                    <a href="#section-two">
                        <li>About Us</li>
                    </a>
                    <a href="#section-third">
                        <li>Goals</li>
                    </a>
                    <a href="#section-five">
                        <li>Tips</li>
                    </a>
                    </div>
                </div>
                
                <div className="right-side-menu">
                <div className="sub-menu">
                    <a href="#">
                    <li>Log In</li>
                    </a>
                    <button>Sign Up</button>
                </div>
                </div>
            </nav>
        </>
    )
}

export default Header
