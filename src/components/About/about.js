import React from 'react'
import { Container, Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import wellpic from '../../assets/wellPic.png';
import './about.css';

const About = () => {
    return (
        <section id="about">
            <Container
                id='about'
                maxWidth='lg'
                sx={{
                    margin: '0 auto',
                    py: '6em',

                }}>
                <Grid
                    container
                    sx={{
                        justifyContent: {
                            sm: 'center',
                            md: 'space-between'
                        }
                    }}>

                    <Grid item xs={12} sm={12} md={4} lg={5}>
                        <Box
                            sx={{
                                maxWidth: '400px',
                                width: '100%',
                                height: '450px',
                                margin: '0 auto',
                                boxShadow: {
                                    xs: '-.5em 1.5em 0px #7bafd4',
                                    sm: '-1.5em 1.5em 0px #7bafd4'
                                },
                                position: 'relative'
                            }}>
                            <Box
                                sx={{
                                    width: '100px',
                                    height: '100px',
                                    zIndex: '0',
                                    position: 'absolute',
                                    right: {
                                        xs: '-4%',
                                        sm: '90%'
                                    },

                                    bottom: {
                                        xs: '-5%',
                                        sm: '-10%'
                                    },
                                    background: 'transparent',
                                    backgroundSize: '15px 13px'
                                }}></Box>
                            <img
                                alt='Personal Image'
                                className='img1'
                                src={wellpic} />

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7.5} lg={7}>
                        <Box sx={{
                            pb: '.5em'
                        }}>
                            <Typography
                                variant='h1'
                                sx={{
                                    fontSize: {
                                        xs: '2.2em',
                                        sm: '2.5em',
                                        md: '3em'
                                    },
                                    py: '.5em',
                                    pt: {
                                        xs: '1.8em',
                                        md: 0,
                                    }
                                }}
                                fontWeight='600'>
                                About Me
                            </Typography>
                            <Typography
                                variant='h2'
                                sx={{
                                    maxWidth: '570px',
                                    fontSize: {
                                        xs: '.8em',
                                        sm: '1em'
                                    },
                                    letterSpacing: '1px'
                                }}>
                                My name is Justin Adams. I am a recent graduate of the University of North Carolina at Chapel Hill with a B.S. in Computer Science and a minor in Statistics. I am currently working as an Associate Full Stack Software Engineer at Fidelity in Durham, NC. Most of my experience is in web development and its integration with backend systems. My goal is to never get complacent, and to continue to keep learning throughout my career.

                            </Typography>
                        </Box>
                        <Typography
                            variant='h2'
                            sx={{
                                maxWidth: '570px',
                                fontSize: {
                                    xs: '.8em',
                                    sm: '1em'
                                },
                                pb: '.5em',
                                letterSpacing: '1px'
                            }}>
                            Learn more about my experience and skills by downloading my resume, connecting with me on LinkedIn, or checking out my GitHub. Keep scrolling to see some technologies, frameworks, and languages that I have experience with.

                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                                maxWidth: '570px',
                                fontSize: {
                                    xs: '.8em',
                                    sm: '1em'
                                },
                                pb: '.5em',
                                letterSpacing: '1px'
                            }}>
                            I developed this website using React, JavaScript, HTML, and CSS. All of the content within this webpage is written by me.
                        </Typography>
                    </Grid>
                </Grid>

            </Container>

        </section>

    )
}

export default About