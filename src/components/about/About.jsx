import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { HiOutlineUsers } from 'react-icons/hi';
import { IoIosFolderOpen } from 'react-icons/io';


const About = () => {
    return (
        <section>
            <div id="about">
                <h2>Get To Know</h2>
                <h2>About Me</h2>
                <div className="container about_container">
                    <div className="about_me">
                        <div className="about_me_image">
                            <img src={ME} alt="About me" />
                        </div>
                    </div>

                    <div className="about_me_content">
                        <div className="about_cards">
                            <article className="about_card">
                                <FaAward className="about_card_icon" />
                                <h3>Experience</h3>
                                <small>1+ years working</small>
                            </article>
                            <article className="about_card">
                                <HiOutlineUsers className="about_card_icon" />
                                <h3>Clients</h3>
                                <small>10+ Worldwide</small>
                            </article>
                            <article className="about_card">
                                <IoIosFolderOpen className="about_card_icon" />
                                <h3>Projects</h3>
                                <small>10+ Completed</small>
                            </article>
                        </div>
                        <p>
                            I am a junior Front-End developer with a passion for creating beautiful and user-friendly websites.
                            I have a strong background in HTML, CSS, JavaScript, Python, React and currently looking for a position in the web development industry.
                        </p>
                        <a href={'#contact'} className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;