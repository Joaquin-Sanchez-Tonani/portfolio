import React from "react";
import './education.css'

function Education(){
    return(
        <div id="education" className="jota-contenedor">
            <div>
                <div className="contendor-edu">
                    <h3 className="tittle-education">Education</h3>
                    <div className="education-contenedor">
                        <div className="education-apartado">    
                            <h3 className="texto-edu">UNIVERSITY CERTIFICATE IN PROGRAMMING</h3>
                            <p><i class="fi fi-rr-angle-small-right">FIRST YEAR | Current</i></p></div>
                        <div className="education-apartado">         
                            <h3 className="texto-edu">F.A.S.T.A. N°1158 <h3 className="texto-edu2">(HIGH SCHOOL)</h3></h3>
                            <p><i class="fi fi-rr-angle-small-right">Bachelor's degree in economics and administration | 2016 - 2021</i></p></div>
                        <div className="education-apartado">             
                            <h3 className="texto-edu">PROGRAMMING COURSE <h3 className="texto-edu2">#Yo Programo</h3> </h3>
                            <p><i class="fi fi-rr-angle-small-right">Python</i><br></br><i class="fi fi-rr-angle-small-right">Objects</i></p></div>
                        <div className="education-apartado">                   
                            <h3 className="texto-edu">ENGLISH COURSE <br></br><h3 className="texto-edu2">#Basic program of english</h3></h3>
                            <p><i class="fi fi-rr-angle-small-right">Level A2</i></p>
                            </div>
                        <div className="education-apartado">                        
                            <h3 className="texto-edu">REACT COURSE <h3 className="texto-edu2">freeCodeCamp</h3></h3>
                            <p><i class="fi fi-rr-angle-small-right">Basic program of React.</i> <br></br><i class="fi fi-rr-angle-small-right">UseState</i><br></br><i class="fi fi-rr-angle-small-right">Components</i></p></div>
                        <div className="education-apartado">
                            <h3 className="texto-edu">JAVASCRIPT COURSE <h3 className="texto-edu2">Lucas Dalto</h3></h3>
                            <p><i class="fi fi-rr-angle-small-right">Mid level</i> <br></br><i class="fi fi-rr-angle-small-right">Fetch</i> <br></br><i class="fi fi-rr-angle-small-right">Document Object Model</i></p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;