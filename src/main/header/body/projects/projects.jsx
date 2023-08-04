import React from "react";
import './projects.css';
import ComponenteProjects from "./componente-projects";

function Projects(){
    return(
    <div className="espaciado">
        <div id="projects" className="projects-contenedor">
            <h3  className="tittle-education">Projects</h3>
            <div>
                <ComponenteProjects ruta='project' img='calculadora' name='Calculator' text= 'Add /n Subtract /n Divide /n Multiply'   />
                <ComponenteProjects ruta='converter' img='converter' name='Converter' text='Converter currency to currency./n This works by API key'/>
            </div>
        </div>
    </div>
    )
}

export default Projects;