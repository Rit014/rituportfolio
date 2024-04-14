import React from 'react';
import { slider } from './Data';
import Resume from "./Resume/Documnet Type_Ritu Panchal CV.pdf";
import './style.css';
import Button from '@mui/material/Button';
const About = () => {
    return (
        <>
            <div className="container-fluid about" id="about" style={{ fontFamily: "'Exo 2', sans-serif", backgroundColor: "#ff8dc" }}>
                <div className="container">
                    <div className='row grid gap-2 mt-3'>
                        <div className='col-12 text-black text-center fw-bold fs-1 mb-5 mt-5' style={{ textShadow: '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255, 255, 255, 0.2)' }}>
                            About <span style={{ color: 'orange' }}>Me</span>
                            <hr className='m-auto mt-0 text-black' style={{ width: '15%' }} />
                        </div>
                        <div className="row sm:grid-cols-1 md:grid-cols-2 m-auto mt-3 mb-3 ">
                            <div className='col-lg-6 col-md-12 col-sm-12 px-5 fs-5 lh-2 pt-5  text-black'>
                                Hello, My name is <span style={{ fontWeight: 'bold', color: 'orange' }}> Ritu Panchal </span>, nice to meet you. please take a look around<br />
                                A goal-oriented <span>Entry Level Frontend Developer</span> with Knowledge of HTML, CSS, JavaScript,
                                ReactJS.
                                I simpliy enjoy working on code and create attractive websites.
                                <div className="d-flex justify-content-between mt-2">
                                    <a href={Resume} download>
                                        <Button variant="contained" className='btn1 text-black fw-bold mb-2 mt-3' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', backgroundColor: 'whiteSmoke' }}>Download CV</Button>
                                    </a>
                                    <a href="https://www.linkedin.com/in/ritu-panchal-7a7273281/" target='true'>
                                        <Button variant="contained" className='btn1 text-black fw-bold mb-2 mt-3' style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', backgroundColor: 'whiteSmoke' }}>Let's chat</Button>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 col-sm-12 mt-5 ms-lg-0 ms-md-4 ms-sm-auto  text-black' id="stats_about">
                                {slider.map((Val) => {
                                    const { text, width } = Val;
                                    return (
                                        <>
                                            <div className='mb-3'>
                                                <span className='fw-bold fs-6 text-black' style={{ fontWeight: "bold", fontSize: "20px", color: 'black' }}>{text}</span>
                                                <div className='slider'>
                                                    <div
                                                        className='inner-slider text-black'
                                                        style={{
                                                            width: `${width}`,
                                                            borderRadius: '10px',
                                                            marginBottom: '10px'
                                                        }}
                                                    >
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;