import logo from '../images/logo.svg'
import menuBtn from '../images/menuBtn.svg'

const Navbar = () => {

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="svg navbar__logo" src={logo} alt="logo"></img></a>
                    <button className="navbar__menu-toggler" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <img className="navbar__menu-btn" src={menuBtn} alt="menu button"></img>

                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="menu__nav navbar-nav ms-auto">
                            <li className="menu__item nav-item">
                                <a className="menu__link" href="#">Home</a>
                            </li>
                            <li className="menu__item nav-item">
                                <a className="menu__link" href="#projects">Projects</a>
                            </li>
                            <li className="menu__item nav-item">
                                <a className="menu__link" href="#about">About</a>
                            </li>
                            <li className="menu__item nav-item">
                                <a className="menu__link" href="#skills">Skills</a>
                            </li>
                            <li className="menu__item nav-item">
                                <a className="menu__link" href="#contact">Contact</a>
                            </li>
                        </ul>
                     </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;