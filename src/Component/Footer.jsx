import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import Email from '@mui/icons-material/Markunread';

const Footer = () => {


    return (
        <>
            <div className="card text-center" style={{ backgroundColor: "#c0c0c0", fontFamily: "'Raleway', sans-serif" }}>
                <div className="card-body bg-black">
                    <Button variant="contained" className='contact_btn fw-bold bg-black text-white'>Let's Collaborate</Button>
                </div>
                <div className="card-footer text-body-secondary bg-black">
                    <a href="https://www.linkedin.com/in/ritu-panchal-7a7273281/" target="true" style={{ marginRight: '11px' }}><LinkedInIcon style={{ color: 'white', fontSize: '28px' }} /></a>
                    <a href="https://github.com/Rit014" target="true" style={{ marginRight: '11px' }}><GitHubIcon style={{ color: 'white', fontSize: '28px' }} /></a>
                    <a href="https://www.instagram.com/rituthename/" target="true" style={{ marginRight: '11px' }}><InstagramIcon style={{ color: 'white', fontSize: '28px' }} /></a>
                    <a href="ritu72052@gmail.com" target="true" style={{ marginRight: '11px' }}><Email style={{ color: 'white', fontSize: '28px' }} /></a>
                </div>
            </div>
        </>
    )
}

export default Footer;