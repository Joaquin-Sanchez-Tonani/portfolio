import React from "react";
import './skills.css';
import Logos from "../../../../logos/logo";

function Skills(){
    return(
        <div id="skills" className="contenedor-skills">
            <div>
                <h3 className="skills-tittle">Skills</h3>
                <div className="skills">
                    <Logos name='JavaScript' img= 'js'/>
                    <Logos name='React' img= 'react'/>
                    <Logos name='Python' img= 'python'/>
                    <Logos name='ChatGPT' img= 'chatgpt'/>
                </div>
                <div className="skills">
                    <Logos name='HTML' img= 'html'/>
                    <Logos name='CSS' img= 'css'/>
                    <Logos name='GitHub' img= 'github'/>
                    <Logos name='Git' img= 'git'/>
                </div>
            </div>
        </div>
    );
};

export default Skills;