import { React, useRef } from 'react'
import emailjs from '@emailjs/browser';
import massage from '../Images/Massage (2).jpg'
import Footer from './Footer';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_h43ot8b', 'template_dg53o98', form.current, {
                publicKey: 'iz2_wQsfCHNMulLAw',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <div className='contact-form'>
                <div className='form'>
                    <h4>If you would like to make a booking, you can fill in the form below. <br /> Serenity is just an email away.  </h4>

                    <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                    <h4>We are conveniently located at 7 Victoria Street Nhill.  </h4>

                </div>

                <div className='form-page-img'>
                    <img src={massage} alt="" />
                </div>

            </div>
            <Footer />
        </>




    );
}

export default Contact;