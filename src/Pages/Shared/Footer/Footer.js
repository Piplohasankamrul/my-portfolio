import React from 'react';
import './Footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
    return (
        <footer id='footer'>
            <a href='#' className='footer__logo'>KHP</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href='https://facebook.com'><FaFacebookF></FaFacebookF></a>
                <a href='https://instagram.com'><FiInstagram></FiInstagram></a>
                <a href='https://twitter.com'><IoLogoTwitter></IoLogoTwitter></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; KHP. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;