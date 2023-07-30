import React from "react";
import './homeMain.css';
import logojst from './logo.png'
function HomeMain(){
    return(
        <div className="home" id="home">
            <div className="home-contenedor">
                <h4 className="short">My name is</h4>
                <h1 className="name">Joaquin Sanchez Tonani </h1>
                <h4 className="short">and I'm </h4>
                <h2 className="profession">web developer</h2>
                <br />
                <a href="https://drive.google.com/file/d/1P6ShLpcIU3_p8qUjGGzE1hQsf6zH4ifw/view?usp=sharing" className="download" target="_blank" rel="noopener noreferrer">Download CV</a>
                <a href="#aboutMe"><i className="fi flecha fi-sr-angle-double-small-down"></i></a>
            </div>
            <div className="div-logo">
                <img className="logo" src={logojst} alt="Logo" />
            </div>

        </div>
    )
};

export default HomeMain;