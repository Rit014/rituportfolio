import React, { useState, useEffect } from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';

const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [theme, setTheme] = useState(localStorage.getItem('theme'));

    const toggleTheme = () => {
       theme === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme');
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);


    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <>

            <nav className="navbar navbar-expand-lg fixed-top py-0" style={{background: 'rgb(34, 35, 39)'}}>
                <div className="container">
                    <a className="navbar-brand ms-3" href="https://www.linkedin.com/in/ritu-panchal-7a7273281/">
                        <h5 className='contact_btn text-warning' style={{textShadow: '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255, 255, 255, 0.1)' }}>
                            mYpOrtFolio
                        </h5>
                    </a>
                    <button className="navbar-toggler text-bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon text-white"> <DehazeIcon /> </span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : 'bg-dark fw-bold'} navbar-collapse`} id="navbarSupportedContent">
                        <ul className='navbar-nav links ms-auto'>
                            <li className='nav-item text-center px-3'>
                                <a href="/" className='nav-link' style={{color: 'white'}}>
                                    Home
                                </a>
                            </li>
                            <li className='nav-item text-center px-3'>
                                <a href="#about" className='nav-link' style={{color: 'white'}}>
                                    About
                                </a>
                            </li>
                            <li className='nav-item text-center px-3'>
                                <a href="#work" className='nav-link' style={{color: 'white'}}>
                                    Project
                                </a>
                            </li>
                            <li className='nav-item text-center px-3'>
                                <a href="#contact" className='nav-link' style={{color: 'white'}}>
                                    Contact
                                </a>
                            </li>
                            <li className='nav-item text-center px-3'>
                                <a className='nav-link toggle' onClick={() => toggleTheme()}>
                                    { theme === 'light-theme' ? '☀️': '🌙'}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar;