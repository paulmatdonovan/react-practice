import { React, useRef } from 'react'
import emailjs from '@emailjs/browser';
import massage from '../Images/Massage (2).jpg'

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
        <div className='contact-form'>
            <div className='form'>
                <form ref={form} onSubmit={sendEmail}>                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>

            </div>

            <div className='form-page-img'>
                <img src={massage} alt="" />
            </div>
        </div>


    );
}

export default Contact;