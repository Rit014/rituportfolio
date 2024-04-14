import React from 'react';
import Button from '@mui/material/Button';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8521sgc', 'template_ip6byss', form.current, {
                publicKey: 'iQg_cwU1iZ89CMLk3',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    return (
        <>
            <section className='contact' style={{ height: '100vh' }}>
                <div className='container-fluid' id='contact' style={{ fontFamily: "'Raleway', sans-serif" }}>
                    <div className='row mt-4'>
                        <div className='col-12 mt-5 text-center fw-bold fs-1'>
                            <p className='text-4xl mt-5 contact-line font-bold inline border-b-4 text-gray-30 border-cyan-500 mt-sm-3 py-md-5 py-sm-4' style={{ textShadow: '2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255, 255, 255, 0.1)' }}>
                                Contact
                                <hr className='m-auto' style={{ width: '11%' }} />
                            </p>
                            <p className=' fw-lighter fs-4 contact-line'>
                                Send me a message
                            </p>
                        </div>
                        <div className="col">
                            <form className='w-50 m-auto text-center'
                                ref={form}
                                onSubmit={sendEmail}
                            >
                                <input type="text" name='user_name' className="form-control form-control-lg fw-bold" placeholder="Name" />
                                <input type="email" name='user_email' className="form-control mt-3 fw-bold" placeholder="Email" />
                                <div className="mb-3 mt-3">
                                    <textarea className="form-control fw-bold" rows="5" id="comment" name="message" placeholder="Message"></textarea>
                                </div>

                                <div className='text-center mt-5 mb-5'>
                                    <Button type='submit' className='contact_btn fw-bold bg-warning text-black'>Contact Me</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Contact;