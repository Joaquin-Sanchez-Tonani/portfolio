import React from "react";
import './contact.css'
import Form from "./form";

function Contact(){
    return(
        <div id="contact" className="contenedor-contact">
            <div>
                <div className="contact">
                    <div className="date">
                        <i className="fi date-logo fi-sr-marker"></i>
                        <h4 className="tittle-date">Adress</h4>
                        <p className="text-date">Rosario/SantaFe/Argentina</p>
                    </div>
                    <div className="date">
                        <i className="fi date-logo fi-sr-phone-call"></i>
                        <h4 className="tittle-date">Phone</h4>
                        <p className="text-date"> + 54-341-5211-602 </p>
                    </div>
                    <div className="date">
                        <i className="fi date-logo fi-sr-envelope"></i>
                        <h4 className="tittle-date">Email</h4>
                        <p className="text-date">joaquinsancheztonani15@gmail.com</p>
                    </div>
                </div>
                <div className="divisor-barra"></div>

                <div className="formulario">
                    <h3 className="tittle-form">How contact with me</h3>
                    <p className="text-form">If you have any job opportunities or freelance projects available, please feel free to contact me through this platform. It would be a pleasure to work with you.</p>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact;