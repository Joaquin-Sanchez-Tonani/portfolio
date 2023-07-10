import React from "react";
import './headerMain.css';

function HeaderMain(){
    return(
        <header className="header-main">
                <nav className="header-nav">
                    <li className="header-nav-li"><a className="header-nav-li-a" href="#home"><i class="fi fi-rr-house-chimney"></i></a></li>
                    <li className="header-nav-li"><a className="header-nav-li-a" href="#aboutMe"><i class="fi fi-rr-user"></i></a></li>
                    <li className="header-nav-li"><a className="header-nav-li-a" href="#education"><i class="fi fi-rr-graduation-cap"></i></a></li>
                    <li className="header-nav-li"><a className="header-nav-li-a" href="#skills"><i class="fi fi-rr-head-side-brain"></i></a></li>
                    <li className="header-nav-li"><a className="header-nav-li-a" href="/#"><i class="fi fi-rr-document"></i></a></li>
                    <li className="header-nav-li"><a className="header-nav-li-a" href="/#"><i class="fi fi-rr-envelope-download"></i></a></li>
                </nav>
        </header>
    );
};



export default HeaderMain;