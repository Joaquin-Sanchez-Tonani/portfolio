import React from "react";
import './aboutMe.css';

function AboutMe(){
    return(
        <div className="about-div"  id="aboutMe">
            <div>
                <h3 className="tittle-about-me">
                    About Me
                </h3>
                <div className="contenedor-1">
                    <p className="text-about-me"> 
                        My name is <strong className="strong">Joaquin</strong>,
                        I'm 20 years old and I was born in <strong className="strong">Rosario</strong>,
                        city of <strong className="strong">Argentina</strong>. 
                    </p>
                </div>
                <div className="contenedor-1">
                    <p className="text-about-me"> 
                        My <strong className="strong">objective</strong> is being able to work and keep learning. 
                        Buff <strong className="strong">my current knowledge</strong>,
                         improve my <strong className="strong">english</strong> and learn other <strong className="strong">new technologies</strong>.
                    </p>
                </div>
                <div className="contenedor-1">
                    <p className="text-about-me"> 
                        I have a <strong className="strong">lot of experience</strong> but I did not have the <strong className="strong">opportunity to work.</strong>
                    </p>
                </div>
                <div className="contenedor-1">
                    <p className="text-about-me"> 
                        My hobbies are <strong className="strong">reading manga</strong>,
                         listening to <strong className="strong">music</strong>,
                         making <strong className="strong">physical activity</strong> and of course <strong className="strong">drinking coffee.</strong>
                    </p>
                </div>
                <div className="contenedor-1">
                    <p className="text-about-me"> 
                    <strong className="strong">Web developer</strong> since 2022, knowledge about <strong className="strong"> JavaScript, HTML, CSS and React framework. </strong>
                    </p>
                </div>
            </div>
        </div>
    );
}


export default AboutMe;