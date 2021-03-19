import React from "react";

import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import search from "../../assets/icons/search-black-18dp.svg";

function Home() {

    return (
        <section id="home">
            <div className="container">
                <div className="search-box">
                    <h2>What are you looking for?</h2>
                    <input type="text" placeholder="Search the city of Municipal..." />
                </div>
                <div className="social-media">
                    <div className="social-media-icon">
                        <img alt="" src={facebook} />
                    </div>
                    <div className="social-media-icon">
                        <img alt="" src={instagram} />
                    </div>
                    <div className="social-media-icon">
                        <img alt="" src={twitter} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;