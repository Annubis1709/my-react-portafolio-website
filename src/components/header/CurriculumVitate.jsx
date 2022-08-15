import React from 'react';
import CV from '../../assets/CV Edier_SanzDEV.pdf';


const CurriculumVitate = () => {
    return (
        <div className='curriculum'>
            <a className='btn' href={CV} download target="_blank" rel="noopener noreferrer">
                Download my CV
            </a>
            <a className='btn btn-primary' href="#contact" target="_blank" rel="noopener noreferrer">
                Let's Talk
            </a>
        </div>
    );
};

export default CurriculumVitate;