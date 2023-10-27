import "./CSS/About.css";
export default function About() {

    return (
        <>
            <div className="about_container">
                <h1>Developer Team</h1>
                <div className="about_card">
                    <div className="about_image">
                        <img src="https://placehold.co/350x350" alt="" />
                    </div>

                    <div className="about_text">
                        <h2>Sonia</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium assumenda sapiente architecto nostrum reprehenderit, cum natus accusantium numquam earum voluptate voluptas adipisci molestias vel ratione? Nulla corrupti laborum, suscipit alias autem nobis iure explicabo provident fugit praesentium consequatur. Quis aliquid debitis necessitatibus rerum.</p>

                        <div className="socialmedia">
                            <div className="social1">
                                <a href="url">
                                    <img className="social-containerL" src="/linkedin.svg" />
                                </a>
                            </div>
                            <div className="social1">
                                <a href="url">
                                    <img className="social-containerg" src="/github.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about_card">
                    <div className="about_text">
                        <h2>Kevin</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium assumenda sapiente architecto nostrum reprehenderit, cum natus accusantium numquam earum voluptate voluptas adipisci molestias vel ratione? Nulla corrupti laborum, suscipit alias autem nobis iure explicabo provident fugit praesentium consequatur. Quis aliquid debitis necessitatibus rerum.</p>

                        <div className="socialmedia">
                            <div className="social1">
                                <a href="https://www.linkedin.com/in/kevinkalus/">
                                    <img className="social-containerl" src="/linkedin.svg" />
                                </a>
                            </div>
                            <div className="social1">
                                <a href="https://github.com/MrKevinka">
                                    <img className="social-containerg" src="/github.svg" />
                                </a>
                            </div>
                        </div>
                    </div>



                    <div className="about_image">
                        <img src="https://placehold.co/350x350" alt="" />
                    </div>
                </div>

                <div className="about_card">
                    <div >
                        <img className="about_image" src="./IMG_1939 crop bw 350.jpeg" alt="image jennifer" />
                    </div>

                    <div className="about_text">
                        <h2>Jennifer</h2>
                        <p>I'm a Jr. Full-Stack Developer who bridges the gap between design and development. With a background in UI design, I understand the importance of aesthetics and user-centered design principles. My proficiency in HTML, CSS, JavaScript & React allows me to bring these designs to life, creating engaging and responsive web applications. My career goals revolve around combining my design & UI skills with coding for organisations dedicated to causes close to my heart, including those that support animals, the environment, people, businesses or heritage</p>

                        <div className="socialmedia">
                            <div className="social1">
                                <a href="http://www.linkedin.com/in/jennifer-rothrock/">
                                    <img className="social-containerL" src="/linkedin.svg" />
                                </a>
                            </div>
                            <div className="social1">
                                <a href="https://github.com/jeniverede">
                                    <img className="social-containerg" src="/github.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <h1>Our Project</h1>
                <div className="project_container">

                </div>
                <h1>Future Plans</h1>
                <div className="future_container">
                    
                </div>
            </div>





        </>
    );
}