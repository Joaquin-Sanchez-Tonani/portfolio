import React from "react";
import './homeMain.css';
import logojst from './logo.png'
function HomeMain(){
    return(
        <div className="home" id="home">
            <div className="redes-sociales">
                <a className="redes-link" rel="noreferrer" target="_blank" href="https://github.com/Joaquin-Sanchez-Tonani"><i className="fi fi-brands-github"></i></a>
                <a className="redes-link" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/joaquin-dario-sanchez-tonani-ba7117272/"><i className="fi fi-brands-linkedin"></i></a>
                <a className="redes-link" rel="noreferrer" target="_blank" href="https://www.instagram.com/sanchez.joaq/"><i className="fi animation-link fi-brands-instagram"></i></a>
            </div>
            <div className="home-contenedor">
                <h4 className="short">My name is</h4>
                <h1 className="name">Joaquin Sanchez Tonani </h1>
                <h4 className="short">and I'm </h4>
                <h2 className="profession">web developer</h2>
                <br />
                <a href="https://drive.google.com/file/d/1P6ShLpcIU3_p8qUjGGzE1hQsf6zH4ifw/view?usp=sharing" className="download" target="_blank" rel="noopener noreferrer">Download CV</a>
                <a href="#aboutMe"><i className="fi flecha fi-bs-chevron-double-down"></i></a>
            </div>
            <div className="div-logo">
                <img className="logo" src={logojst} alt="Logo" />
            </div>

        </div>
    )
};

export default HomeMain;