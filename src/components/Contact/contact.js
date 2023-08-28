import React, { useRef } from 'react'
import { Fab } from '@mui/material'
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_834c5sy', 'template_m0q0ftq', form.current, 'uyK0I13euMeY-8INs')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email Sent!");
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities!</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='from_name' />
                    <input type='email' className='email' placeholder='Your Email' name='from_email' />
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message' />
                    <Fab variant='extended' size='medium' sx={{
                        backgroundColor: '#f5f5f5',
                        textTransform: 'capitalize',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        boxShadow: 0,
                        color: '#1e1e1e',
                        border: '2px solid #f5f5f5',
                        marginTop: '1.5rem',
                    }} href='' target='_blank' type='submit'>Submit</Fab>
                </form>
            </div>
        </section>
    )
}

export default Contact