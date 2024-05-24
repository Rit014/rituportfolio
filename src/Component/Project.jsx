import React from 'react';
import Image from './Images/Image-2.png';
const Project = () => {
    return (
        <>
            <section className='project'>
                <div className="container" id="work" style={{fontFamily: "'Raleway', sans-serif" }}>
                    <div className='row mt-4'>
                        <div className='col text-center fw-bold fs-1 mb-5 mt-5'>
                            <p className='text-4xl mt-5 font-bold inline border-b-4 text-gray-30 border-cyan-500' style={{ textShadow: '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255, 255, 255, 0.1)' }}>
                                Work
                                <hr className='m-auto mt-0' style={{ width: '7%' }} />
                            </p>
                            <p className='py-6 text-black fw-lighter fs-4' style={{ color: 'white' }}>
                                Check out some of my most recent work
                            </p>
                        </div>
                        <div className='row grid gap-2 sm:grid-cols-2 md:grid-cols-3 m-auto mt-3 mb-3'>
                            <div className='col text-center py-5 project-box'>
                                <a href="https://rit014.github.io/edusity_project/" target="_blank" style={{textDecoration: 'none'}}>Project 1</a>
                            </div>
                            <div className='col text-center py-5 project-box'>
                                <a href="https://rit014.github.io/ecommerce-website/" target="_blank" style={{textDecoration: 'none'}}>Project 2</a>
                            </div>
                            <div className='col text-center py-5 project-box'>
                                <a href="https://rit014.github.io/weather_app/" target="_blank" style={{textDecoration: 'none'}}>Project 3</a>
                            </div>
                        </div>
                        <div className='row grid gap-2 sm:grid-cols-2 md:grid-cols-3 m-auto mt-3 mb-3'>
                            <div className='col-4 text-center py-5 project-box'>
                                <a href="https://rit014.github.io/quizproject/" target="_blank" style={{textDecoration: 'none'}}>Project 4</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project;