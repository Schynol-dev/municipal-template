import React from "react"

function About() {

    return (
        <section id="about" className="wrapper style2">
            <div className="container">
                <div className="welcome">
                    <h1>Welcome to Municipal</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias eligendi reprehenderit aliquam beatae. Quisquam a consequatur voluptatum minima nesciunt fugit quia numquam. Saepe necessitatibus laboriosam est hic aliquid maxime.
                    Illum nihil tempora numquam tempore sed cumque vitae, dolore recusandae dolorem voluptatem vero pariatur nostrum labore saepe doloremque laboriosam, aliquam asperiores quasi neque. Quis mollitia eum officia, quam exercitationem nesciunt?</p>
                </div>
                <div className="news">
                    <h1>City of many flavors</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In error pariatur quo odit, perspiciatis ut doloremque repellat, id ea similique quae. Assumenda aliquid esse molestiae nesciunt fugit excepturi, doloremque quasi?</p>
                    <div className="posts">
                        <div className="post">
                            <div className="post__first">
                                <h3>News Header</h3>
                                <h4>Type of News</h4>    
                            </div>
                        </div>
                        <div className="post">
                            <div className="post__second">
                                <h3>News Header</h3>
                                <h4>Type of News</h4>    
                            </div>
                        </div>
                        <div className="post">
                            <div className="post__third">
                                <h3>News Header</h3>
                                <h4>Type of News</h4>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;