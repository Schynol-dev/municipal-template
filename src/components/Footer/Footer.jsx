import React from "react";

function Footer() {

    return (
        <div id="footer" className="wrapper style2">
            <div className="container">
                <div className="footer-links">
                    <div className="footer-links__column">
                        <p>About the website</p>
                        <ul>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                        </ul>
                    </div>
                    <div className="footer-links__column">
                        <p>About us</p>
                        <ul>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                        </ul>
                    </div>
                    <div className="footer-links__column">
                        <p>Press / Media</p>
                        <ul>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                        </ul>
                    </div>
                    <div className="footer-links__column">
                        <p>Our Website</p>
                        <ul>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                            <li><a>Link</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>Copyright © {new Date().getFullYear()} || Photos: Usplash</p> 
                </div>
            </div>
        </div>
    );
}

export default Footer;