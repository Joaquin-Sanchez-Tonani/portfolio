import React from "react";
import './logo.css';

function Logos(props){
    return(
        <div className="logo-contenedor">
            <h4 className="logo-tittle">{props.name}</h4>
            <img className="logo-img" src={require(`./${props.img}.png`)} alt={props.name} />
        </div>
    );
}

export default Logos;