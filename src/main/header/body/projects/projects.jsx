import React from "react";
import './projects.css';
import ComponenteProjects from "./componente-projects";

function Projects(){
    return(
    <div className="espaciado">
        <div id="projects" className="projects-contenedor">
            <h3  className="tittle-education">Projects</h3>
            <div>
                <ComponenteProjects ruta='project' img='calculadora' name='Calculator' text= 'React /n Javascript /n Hooks: useState()'   />
                <ComponenteProjects img='oshinogod' name='Project2' text='Project2'/>
                <ComponenteProjects img='oshinogod' name='Project3' text='Project2'/>
            </div>
        </div>
    </div>
    )
}

export default Projects;