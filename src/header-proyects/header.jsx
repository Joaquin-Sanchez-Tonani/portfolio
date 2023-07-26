import React from "react";
import './header.css'
function Header(){
    return(
        <header className="header-component">
            <h3 className="header-component-h3">Calculator Project</h3> 
            <a className="header-component-link" href="/">Back</a>
        </header>
    );
};

export default Header;