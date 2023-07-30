import React from "react";
import './componente-projects.css';

function ComponenteProjects(props){
    const lines = props.text.split('/n')

    return(
        <a className="project-router" href={`/${props.ruta}`}>
        <div className="marco1">
            <h3 className="h3-absolute">{props.name}</h3>
            <div className="marco-imagen">
                <img className="project-img" src={require(`./${props.img}.png`)} alt={props.name} />
            </div>
            <div className="marco-p">   
                <p><strong className="h5-title">Functionality:</strong><br/> </p>{ lines.map((line) => (<p key={line} className="lineas-projects">+ {line}</p>)) }
            </div>
        </div>
        </a> 
    )
}

export default ComponenteProjects;