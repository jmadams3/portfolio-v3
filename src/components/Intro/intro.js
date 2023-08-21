import React from 'react'
import bg from '../../assets/profile_pic-PhotoRoom.png-PhotoRoom.png'
import resume from '../../assets/Justin_Adams_Resume_August__2023.pdf'
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fab } from '@mui/material'
import './intro.css'

const socials = [
    {
        icon: faLinkedinIn,
        url: "https://www.linkedin.com/in/justin-adams3/",
        size: "1x"
    },
    {
        icon: faGithub,
        url: "https://github.com/jmadams3",
        size: 'lg'
    }
];

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I'm <span className='introName'>Justin</span>, <br /> A Full Stack Engineer</span>
                <p className='introParagraph'>I am a Full Stack Software Engineer with experience <br /> in both Frontend and Backend technologies.</p>
                <div className='buttons'>
                    <Fab variant='extended' size='medium' sx={{
                        backgroundColor: '#1E1E1E',
                        textTransform: 'capitalize',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        boxShadow: 0,
                        color: '#f5f5f5',
                        border: '2px solid #f5f5f5',
                        ":hover": {
                            backgroundColor: '#f5f5f5',
                            color: '#1E1E1E',
                        },
                    }} href={resume} download="JustinAdamsResume" target='_blank'>Download Resume</Fab>
                    <Fab className='fab' variant='extended' size='medium' sx={{
                        backgroundColor: '#1E1E1E',
                        textTransform: 'capitalize',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        boxShadow: 0,
                        color: '#f5f5f5',
                        border: '2px solid white',
                        ml: 1,
                        ":hover": {
                            backgroundColor: '#f5f5f5',
                            color: '#1E1E1E',
                        },
                    }} href="https://www.linkedin.com/in/justin-adams3/" target='_blank'><FontAwesomeIcon icon={faLinkedinIn} size="1x" /></Fab>
                    <Fab className='fab' variant='extended' size='medium' sx={{
                        backgroundColor: '#1E1E1E',
                        textTransform: 'capitalize',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        boxShadow: 0,
                        color: '#f5f5f5',
                        border: '2px solid white',
                        ml: 1,
                        ":hover": {
                            backgroundColor: '#f5f5f5',
                            color: '#1E1E1E',
                        },
                    }} href="https://github.com/jmadams3" target='_blank'><FontAwesomeIcon icon={faGithub} size="1x" /></Fab>
                </div>
            </div>
            <img src={bg} alt='profile' className='bg' />
        </section>
    )
}

export default Intro;