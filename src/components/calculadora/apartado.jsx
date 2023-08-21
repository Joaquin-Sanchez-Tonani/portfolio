import React from "react";
import './apartado.css'
import { useState , useRef , useEffect} from "react";
import icon from './me.png'
import Skills from "../../main/header/body/skills/skills";
import Education from "../../main/header/body/education/education";

function Apartado(){
    const textos = {
        1: <h3 className="texto-sobreMi">
            I'm <strong className="importants-words">20</strong> years old and I was born in <strong className="importants-words">Rosario</strong>, a city in <strong className="importants-words">Argentina</strong>. I'm working as a freelancer while I study a technical degree in <strong className="importants-words">programming</strong>. <br />
            I've been a <strong className="importants-words">programmer</strong> since <strong className="importants-words">2022</strong>, and I am currently in the process of searching for a job to further my growth in both knowledge and experience. <br />
            I have gained a lot of experience through the projects I consistently undertake, although I haven't had the chance to work <strong className="importants-words">professionally</strong> yet.
            This is a brief glimpse of who I am.
        </h3>,
        2: Skills(),
        3: Education()
    }

    const [texto,setTexto] = useState(textos[1])
    const elements = document.querySelectorAll('.title-apartado');

    const textFocus = (event) =>{
        const id = event.target.id;
        buttonRef.current.classList.remove('enfoque');
        elements.forEach(element => {
        element.classList.remove('enfoque');
        });
        const clickedElement = document.getElementById(id);
        clickedElement.classList.add('enfoque');
        setTexto(textos[id])
    }

    const buttonRef = useRef(null);

    useEffect(() => {
        // Cuando el componente se monta, enfocamos el botón.
        buttonRef.current.classList.add('enfoque');
        
    }, []);
    
    return(
        <div className="apartado11" id="aboutMe">
            <div className="fondo-apartado">
                <div className="fondo-apartado-transparente">
                    <div className="div-image">
                        <img className="icon-joaquin" src={icon} alt="joaquinSanchezTonani" />
                    </div>
                    <h3 className="description" >Programmer</h3>
                    <h3 className="description2" >and</h3>
                    <h3 className="description" >Web developer</h3>
                </div>
                <div className="div-hire-cv">
                    <a className="hire-me" href="#contact">Hire me</a>
                    <a className="cv-download" href="https://drive.google.com/file/d/1P6ShLpcIU3_p8qUjGGzE1hQsf6zH4ifw/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
                </div>
            </div>
            <div className="fondo-apartado2"> 
                <div className="title-apartado-cont">
                    <button ref={buttonRef} id="1" onFocus={textFocus} type="button" className="title-apartado">About me</button>
                    <button id="2" onFocus={textFocus} type="button" className="title-apartado">Skills</button>
                    <button id="3" onFocus={textFocus} type="button" className="title-apartado">Education</button>
                </div>
                <div className="contenedor-apartado">
                    <div className="p-apartado">{texto}</div>
                </div>
            </div>
        </div>
    )
}

export default Apartado;