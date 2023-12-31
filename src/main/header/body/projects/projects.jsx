import React from "react";
import './projects.css';
import ComponenteProjects from "./componente-projects";

function Projects(){
    return(
    // <div className="espaciado">
    //     <div id="projects" className="projects-contenedor">
    //         <h3  className="tittle-education">Projects</h3>
    //         <div className="column-project">
    //             <ComponenteProjects ruta='https://joaquin-sanchez-tonani-ecommerce.netlify.app/' img='ecommerce' name='E-commerce' text= 'E-commerce site'   />
    //             <ComponenteProjects ruta='project' img='calculadora' name='Calculator' text= 'Add /n Subtract /n Divide /n Multiply'   />
    //             <ComponenteProjects ruta='converter' img='converter' name='Converter' text='Converter currency to currency./n This works by API key'/>
    //         </div>
    //     </div>
    // </div>
    <div id="projects" className="apartado-project">
                    <h3 className="titulo-projects-h3">Projects</h3>

        <div  className="grid-projects">
            <div className="componentes">
                <ComponenteProjects ruta='https://joaquin-sanchez-tonani-ecommerce.netlify.app/'  name='E-commerce site' />
                <ComponenteProjects ruta='https://hangmanjoaquin.netlify.app/'  name='Hangman' />
                <ComponenteProjects ruta='project'  name='Calculator' />
                <ComponenteProjects ruta='converter'  name='Converter' />
            </div>
        </div>
    </div>
    )
}

export default Projects;