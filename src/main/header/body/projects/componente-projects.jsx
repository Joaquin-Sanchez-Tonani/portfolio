import React from "react";
import './componente-projects.css';

function ComponenteProjects(props){

    return(
        <a className="proyecto-div" target="_black" href={`${props.ruta}`}>
            <div>
                <h1 className="project-titulo">{props.name}</h1>
            </div>
        </a> 
    )
}

export default ComponenteProjects;