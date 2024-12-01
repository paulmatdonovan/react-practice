import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className='left-section'>

                <p>email</p>
                <h2>howareyoutoei@gmail.com </h2>
                {/* <i class="fa-solid fa-phone"></i> */}
                <p>phone</p>
                <h2>0401 536 261</h2>

            </div>
            <div className='right-section'>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.1275652814215!2d141.64763511255867!3d-36.33345805078375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6acf2133eff8f75d%3A0x1bbe572fd7edf1ad!2sNhill%20Thai%20massage!5e0!3m2!1sen!2sau!4v1732912401278!5m2!1sen!2sau" ></iframe> </div>
            </div>
        </div >
    )
}
export default Footer;
