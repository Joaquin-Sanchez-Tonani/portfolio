import React from "react";
import './homeMain.css';

function HomeMain(){
    return(
        <div className="home" id="home">
            <div className="home-contenedor">
                <h4 className="short">My name is</h4>
                <h1 className="name">Joaquin Sanchez Tonani</h1>
                <h4 className="short">and I'm </h4>
                <h2 className="profession">web developer</h2>
                <a href="#aboutMe"><i className="fi flecha fi-sr-angle-double-small-down"></i></a>
            </div>
            
            
        </div>
    )
};

export default HomeMain;