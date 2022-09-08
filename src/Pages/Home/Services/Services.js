import React from 'react';
import './Services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Design</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list_icon'></BiCheck>
                            <p>PSD To HTML</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon'></BiCheck>
                            <p>XD To HTML</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon'></BiCheck>
                            <p>Figma To HTML</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon'></BiCheck>
                            <p>Responsive Design</p>
                        </li>
                        <li>
                            <BiCheck className='service__list_icon'></BiCheck>
                            <p>Frontend Design</p>
                        </li>
                    </ul>
                </article>
                    {/* ==================End Of Web Design=================== */}
                    <article className='service'>
                        <div className='service__head'>
                            <h3>Web Development</h3>
                        </div>

                        <ul className='service__list'>
                            <li>
                                <BiCheck className='service__list_icon'></BiCheck>
                                <p>Frontend Development</p>
                            </li>
                            <li>
                                <BiCheck className='service__list_icon'></BiCheck>
                                <p>Backend Development</p>
                            </li>
                            <li>
                                <BiCheck className='service__list_icon'></BiCheck>
                                <p>React Development</p>
                            </li>
                            <li>
                                <BiCheck className='service__list_icon'></BiCheck>
                                <p>Responsive Design</p>
                            </li>
                            <li>
                                <BiCheck className='service__list_icon'></BiCheck>
                                <p>Frontend Design</p>
                            </li>
                        </ul>

                    </article>
                
            </div>
        </section>
    );
};

export default Services;