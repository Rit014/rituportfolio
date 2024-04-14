import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Email from '@mui/icons-material/Email';

const Home = () => {
    return (
        <>
            <section className='home' style={{height: '100vh'}}>
                <div className='container text-center' id='/'>
                        <div className='row d-flex flex-column align-items-center mt-3 py-5 '>
                            <div className="col py-5 m-auto mt-5">
                                <h1 className="heading mt-5">About this site</h1>
                                <p className="para mt-3">
                                    Hello visitor, welcome in my Portfolio website<br />
                                    Let's know about my work and skill experience...
                                </p>
                            </div>
                            <div className='col py-2 mt-3'>
                                <a href="https://www.linkedin.com/in/ritu-panchal-7a7273281/" style={{ marginRight: '11px' }}><LinkedInIcon style={{ color: 'black', fontSize: '28px' }} /></a>
                                <a href="https://github.com/Rit014" style={{ marginRight: '11px' }}><GitHubIcon style={{ color: 'black', fontSize: '28px' }} /></a>
                                <a href="https://www.instagram.com/rituthename/" style={{ marginRight: '11px' }}><InstagramIcon style={{ color: 'black', fontSize: '28px' }} /></a>
                                <a href="ritu72052@gmail.com" style={{ marginRight: '11px' }}><Email style={{ color: 'black', fontSize: '28px' }} /></a>
                            </div>
                        </div>
                </div>
            </section >
        </>
    )
}

export default Home;