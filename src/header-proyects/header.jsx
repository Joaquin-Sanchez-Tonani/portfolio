import React from "react";
import './header.css'
function Header(props){
    return(
        <header className="header-component">
            <h3 className="header-component-h3">{props.title} Project</h3> 
            <a className="header-component-link" href="/">Back</a>
        </header>
    );
};

export default Header;