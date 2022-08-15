import React from 'react';
import './header.css';
import CurriculumVitate from "./CurriculumVitate";
import ME from '../../assets/me.png';
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className=" container header-container">
                <h2>Hello I'm</h2>
                <h1>Edier Sanchez Sanchez</h1>
                <h2 className="text-light">Junior FrontEnd Developer</h2>
                <CurriculumVitate />
                <HeaderSocials />
                <div className='me'>
                    <img src={ ME } alt="me" />
                </div>
                <a className='scroll-down' href="#contact" target="_blank" rel="noopener noreferrer">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;