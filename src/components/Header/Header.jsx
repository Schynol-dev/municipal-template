import React from "react";

function Header() {

    return (
        <div id="header">
            <div className="transparent-background"></div>
            <div className="container">
                <div id="navigation">
                    <div className="navigation__left">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about-us">About Us</a></li>
                            <li><a href="#things-to-do">Things To Do</a></li>
                        </ul>
                    </div>
                    <div className="navigation__logo">
                        <h1>Municipal</h1>
                    </div>
                    <div className="navigation__right">
                        <ul>
                            <li><a>Residents</a></li>
                            <li><a>Visitors</a></li>
                            <li><a>Business</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;