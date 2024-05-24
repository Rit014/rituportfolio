import React from 'react';
import Button from '@mui/material/Button';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "bed41d3a-1ec6-48b4-9023-76005d1f38e4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
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
                                onSubmit={onSubmit}
                            >
                                <input type="text" name='user_name' className="form-control form-control-lg fw-bold " placeholder="Name" />
                                <input type="email" name='user_email' className="form-control mt-3 fw-bold" placeholder="Email" />
                                <div className="mb-3 mt-3">
                                    <textarea className="form-control fw-bold" rows="5" id="comment" name="message" placeholder="Message"></textarea>
                                </div>

                                <div className='text-center mt-5 mb-5'>
                                    <Button type='submit' className='contact_btn fw-bold bg-warning text-black'>Contact Me</Button>
                                </div>
                                <span>{result}</span>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
export default Contact;