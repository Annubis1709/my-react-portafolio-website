import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className='header-socials'>
            <a href='https://www.linkedin.com/in/edier-sanchez-sanchez' target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href='https://github.com/Annubis1709' target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            <a href='https://twitter.com/edier_sanz' target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
        </div>
    );
};

export default HeaderSocials;