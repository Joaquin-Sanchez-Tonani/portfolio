import React from "react";
import './education.css'

function Education(){
    return(
        <div id="education" className="jota-contenedor">
            <div>
                <div  className="contendor-edu">
                    <h3 className="tittle-education">Education</h3>
                    <div className="education-contenedor">
                        <div className="education-apartado">
                            <h3 className="texto-edu">UNIVERSITY CERTIFICATE IN PROGRAMMING</h3>
                            <p>+ FIRST YEAR | Current</p></div>
                        <div className="education-apartado">
                            <h3 className="texto-edu">F.A.S.T.A. N°1158 <h3 className="texto-edu2">(HIGH SCHOOL)</h3></h3>
                            <p>+ Bachelor's degree in economics and administration | 2016 - 2021</p></div>
                        <div className="education-apartado">
                            <h3 className="texto-edu">PROGRAMMING COURSE <h3 className="texto-edu2">#Yo Programo</h3> </h3>
                            <p>+ Pyton<br></br>+ Objects</p></div>
                        <div className="education-apartado">
                            <h3 className="texto-edu">ENGLISH COURSE <br></br><h3 className="texto-edu2">#Basic program of english</h3> </h3>
                            <p>+ Level A2</p></div>
                        <div className="education-apartado">
                            <h3 className="texto-edu">REACT COURSE <h3 className="texto-edu2">freeCodeCamp</h3></h3>
                            <p>+ Basic program of React. <br></br>+ UseState<br></br>+ Components</p></div>
                        <div className="education-apartado">
                            <h3 className="texto-edu">JAVASCRIPT COURSE <h3 className="texto-edu2">Lucas Dalto</h3></h3>
                            <p>+ Mid level<br></br>+ Fetch<br></br>+ Document Object Model</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;