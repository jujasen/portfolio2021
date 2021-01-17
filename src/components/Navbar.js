import logo from '../images/logo.svg'
import menuBtn from '../images/menuBtn.svg'
import menuBtnHover from '../images/menuBtnHover.svg'
import React, { useState } from 'react';


const Navbar = () => {


    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="svg navbar__logo" src={logo} alt="logo"></img></a>
                    <button className="navbar__menu-toggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <img className="navbar__menu-btn" src={menuBtnHover} alt="menu button"></img>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="menu__nav navbar-nav ms-auto">
                            <li className="menu__item nav-item">
                                <a className="menu__link menu__link--active" href="#">Home</a>
                            </li>
                            <li className="menu__item nav-item">
                                <a className="menu__link" href="#">Projects</a>
                            </li>
                            <li className="menu__item nav-item">
                                <a className="menu__link" href="#">About</a>
                            </li>
                            <li className="menu__item nav-item">
                                <a className="menu__link" href="#">Skills</a>
                            </li>
                            <li className="menu__item nav-item">
                                <a className="menu__link" href="#">Contact</a>
                            </li>
                        </ul>
                     </div>
                </div>
            </nav>
        </>

    )

}

export default Navbar;