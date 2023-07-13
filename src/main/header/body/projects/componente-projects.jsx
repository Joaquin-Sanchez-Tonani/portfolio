import React from "react";
import './componente-projects.css';

function ComponenteProjects(props){
    return(
        <div className="marco1">
            <h3 className="h3-absolute">{props.name}</h3>
            <div className="marco-imagen">
                <img className="project-img" src={require(`./${props.img}.png`)} alt={props.name} />
            </div>
            <div className="marco-p">   
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ComponenteProjects;