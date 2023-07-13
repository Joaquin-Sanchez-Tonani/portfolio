import React from "react";
import './projects.css';
import ComponenteProjects from "./componente-projects";

function Projects(){
    return(
    <div id="projects" className="projects-contenedor">
        <h3  className="tittle-education">Projects</h3>
        <div>
            
                <ComponenteProjects img='oshinogod' name='Calculator' text='This project is a basic calculator, made with components and useState'/>
            
                <ComponenteProjects img='oshinogod' name='Project2' text='Project2'/>
            
                <ComponenteProjects img='oshinogod' name='JotaTotiMUERTE' text='Project2'/>
            
        </div>
    </div>
    )
}

export default Projects;