import React from "react";
import GaleriaLogo from './logoGaleria.svg';
import { NavLink } from "react-router-dom";
import './Navbar.scss';
const Navbar = () => {
    return (
        <div className="navbar">
            <img src={GaleriaLogo} className="navbar__logo"></img>
            <NavLink to='picture/1' className="navbar__button"> START SLIDESHOW </NavLink>
        </div>
    )
}

export default Navbar;