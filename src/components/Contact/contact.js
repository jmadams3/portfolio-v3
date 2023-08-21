import React from 'react'
import { Fab } from '@mui/material'
import './contact.css'

const Contact = () => {
    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to discuss any work opportunities!</span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name' />
                    <input type='email' className='email' placeholder='Your Email' />
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
                    }} href='' target='_blank'>Submit</Fab>
                </form>
            </div>
        </section>
    )
}

export default Contact