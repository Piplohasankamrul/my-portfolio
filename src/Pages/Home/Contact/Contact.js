import React, { useRef } from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x4p7pdu', 'template_cj4l5r6', form.current, 'ln7JKjp1OpN5nKZ-q')

        e.target.reset();
         
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'></MdOutlineEmail>
                        <h4>Email</h4>
                        <h5>mohammedkamrulhasankh@gmail.com</h5>
                        <a href='mailto:mohammedkamrulhasankh@gmail.com'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon'></RiMessengerLine>
                        <h4>Messenger</h4>
                        <h5>piplohasan kamrul</h5>
                        <a href='https://m.me/piplohasan.kamrul'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'></BsWhatsapp>
                        <h4>WhatsApp</h4>
                        <h5>+8801608595037</h5>
                        <a href='https://api.whatsapp.com/send?phone+8801608595037'>Send a message</a>
                    </article>
                </div>
                {/* End Of Contact Options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required></input>
                    <input type='email' name='email' placeholder='Your Email' required></input>
                    <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;