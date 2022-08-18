import React, { useState } from 'react';
import './navBar.css';
import { ImHome, ImUser, ImBook } from 'react-icons/im';
import {RiServiceFill} from "react-icons/ri";
import {SiGooglemessages} from "react-icons/si";

const NavBar = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav >
            <a
                href={"#"}
                onClick={ () => setActiveNav('#') }
                className={ activeNav === '#' ? 'active': '' }>
                <ImHome />
            </a>
            <a
                href={"#about"}
                onClick={ () => setActiveNav('#about') }
                className={ activeNav === '#about' ? 'active': '' } >
                <ImUser />
            </a>
            <a
                href={"#experience"}
                onClick={ () => setActiveNav('#experience') }
                className={ activeNav === '#experience' ? 'active': '' } >
                <ImBook />
            </a>
            <a
                href={"#services"}
                onClick={ () => setActiveNav('#services') }
                className={ activeNav === '#services' ? 'active': '' } >
                <RiServiceFill />
            </a>
            <a
                href={"#contact"}
                onClick={ () => setActiveNav('#contact') }
                className={ activeNav === '#contact' ? 'active': '' } >
                <SiGooglemessages />
            </a>
        </nav>
    );
};

export default NavBar;