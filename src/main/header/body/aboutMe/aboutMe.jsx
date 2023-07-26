import React from "react";
import './aboutMe.css';

function AboutMe(){
    return(
        <div className="about-div"  id="aboutMe">
            <div>
                <h3 className="tittle-about-me">
                    About Me
                </h3>
                <div className="cont-about">
                    <div className="contenedor-1">
                        <p className="text-about-me"> 
                                                
                            My name is <strong className="strong">Joaquin</strong>, and I was born in <strong className="strong">Rosario, Argentina</strong>. I'm <strong className="strong">20 years old</strong> and have been a <strong className="strong">programmer</strong> for the past 2 years. Programming has been my passion, and I enjoy the creative process of solving problems and building innovative solutions.

                            Apart from programming, I have a wide range of hobbies and interests. I love <strong className="strong">reading mangas</strong>, watching <strong className="strong">anime</strong> or <strong className="strong">series</strong>.

                            <strong className="strong"> Music</strong> is also a part of my life as it often fuels my creativity while programming 
                            
                            i do exercise, which not only keeps me physically fit, but also helps me to clear up my mind and stay focused

                            And of course, I am an avid <strong className="strong">coffee lover</strong>. There's something comforting and invigorating about sipping a cup of coffee while working on a challenging coding project or simply enjoying a moment of relaxation.

                            Although I have gained a lot of experience through personal projects and self-learning, I haven't had the opportunity to work professionally yet. However, I am eager to apply my skills and knowledge in a professional setting, collaborate with a team, and contribute to meaningful projects.

                            I am <strong className="strong">driven</strong>, curious, and always seeking to expand my knowledge in the world of programming. I am excited about the possibilities that lie ahead and the prospect of making a significant impact through my work.

                            That's a little glimpse into who I am, Joaquin.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AboutMe;