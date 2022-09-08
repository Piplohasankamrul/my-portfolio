import React from 'react';
import './About.css'
import ME from '../../../images/km.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='ME' ></img>
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'></FaAward>
                            <h5>Experience</h5>
                            <small>1+ Years Working </small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon'></FiUsers>
                            <h5>Clients</h5>
                            <small>200+ Worldwide </small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'></VscFolderLibrary>
                            <h5>Projects</h5>
                            <small>8+ Completed </small>
                        </article>

                    </div>
                    <div className='about__content_info'>
                        <p>
                            Reusability is key in reducing bugs and coding quickly. The more I use a piece of code, the more confident and familiar I become with it, which in turn significantly speeds up my development time
                        </p>
                        <div>
                        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;