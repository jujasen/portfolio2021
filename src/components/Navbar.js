import react from 'react';
import logo from '../images/logo.svg'
import menuBtn from '../images/menuBtn.svg'
import menuBtnHover from '../images/menuBtnHover.svg'

const Navbar = () => {

    return (
        <>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img className="svg navbar__logo" src={logo} alt="logo"></img></a>
                    <button className="navbar__menu-toggler" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <img className="navbar__menu-btn" src={menuBtn} alt="menu button"></img>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="menu__nav navbar-nav ms-auto">
                            <li class="menu__item nav-item">
                                <a class="menu__link menu__link--active" href="#">Home</a>
                            </li>
                            <li class="menu__item nav-item">
                                <a class="menu__link" href="#">Projects</a>
                            </li>
                            <li class="menu__item nav-item">
                                <a class="menu__link" href="#">About</a>
                            </li>
                            <li class="menu__item nav-item">
                                <a class="menu__link" href="#">Skills</a>
                            </li>
                            <li class="menu__item nav-item">
                                <a class="menu__link" href="#">Contact</a>
                            </li>
                        </ul>
                     </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;