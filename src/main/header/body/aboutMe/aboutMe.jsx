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
                                                    Aquí tienes el texto en inglés con las etiquetas <strong className="strong"></strong> agregadas a las palabras o partes importantes sin repetir las etiquetas en el mismo texto:

                            My name is <strong className="strong">Joaquin</strong>, and I was born in <strong className="strong">Rosario, Argentina</strong>. I'm <strong className="strong">20 years old</strong> and have been a <strong className="strong">programmer</strong> for the past 2 years. Programming has been my passion, and I enjoy the creative process of solving problems and building innovative solutions.

                            Apart from programming, I have a wide range of hobbies and interests. I love <strong className="strong">reading mangas</strong>, watching <strong className="strong">anime</strong> or <strong className="strong">series</strong>.

                            <strong className="strong"> Music</strong> is also a big part of my life. I find solace and inspiration in various genres, and it often fuels my creativity while programming. Whether it's listening to my favorite tunes or discovering new artists, music has a way of connecting with me on a deeper level.

                            To maintain a healthy balance in my life, I engage in physical activities regularly. Whether it's going for a run, or hitting the <strong className="strong">gym</strong>, I find that exercise not only keeps me physically fit but also helps me clear my mind and stay focused.

                            And of course, I am an avid <strong className="strong">coffee lover</strong>. There's something comforting and invigorating about sipping a cup of coffee while working on a challenging coding project or simply enjoying a moment of relaxation.

                            Although I have gained a lot of experience through personal projects and self-learning, I haven't had the opportunity to work professionally yet. However, I am eager to apply my skills and knowledge in a professional setting, collaborate with a team, and contribute to meaningful projects.

                            I am <strong className="strong">driven</strong>, curious, and always seeking to expand my knowledge in the world of programming. I am excited about the possibilities that lie ahead and the prospect of making a significant impact through my work.

                            That's a little glimpse into who I am, Joaquin, the passionate programmer with diverse interests and a hunger for new experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AboutMe;