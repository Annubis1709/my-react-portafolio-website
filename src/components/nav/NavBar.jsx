import React from 'react';
import './navBar.css';
import { ImHome, ImUser, ImBook } from 'react-icons/im';
import {RiServiceFill} from "react-icons/ri";
import {SiGooglemessages} from "react-icons/si";

const NavBar = () => {
    return (
        <nav >
            <a href={"#"}  className='active'><ImHome /></a>
            <a href={"#about"}><ImUser /></a>
            <a href={"#experience"}><ImBook /></a>
            <a href={"#services"}><RiServiceFill /></a>
            <a href={"#contact"}><SiGooglemessages /></a>
        </nav>
    );
};

export default NavBar