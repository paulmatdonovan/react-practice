import React from 'react'
import ThaiGirl from '../Images/Thailand (4).jpg'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left-section'>
                <h1>About Us</h1>
                <p>Thai massage is a type of full body massage that uses a mixture of pressure, stretching, and gentle adjustments to nurture the body. A technique perfected over thousands of years, to this day it is one of the most common forms of alternative medicine in Thailand. <br /><br />

                    Thai massage can help relax the body and mind. Numerous studies have found clinical benefits to Thai massage, including improvements in pain, joint mobility, and muscle stiffness.<br /><br />

                    It is our vision at Nhill Thai massage to bring all the therapeutic and holistic benefits of thousands of years of culture to the people of regional Vicotria.<br /><br />

                    Rather than travel all the way to Thailand, you can enjoy the nurturing benefits by stopping by today.<br /><br />

                    Come and visit our certified masseuses, who are passionate about their craft and determined to provide the most professional and beneficial Thai massage not only in regional Victoria but anywhere in Australia!<br /><br />

                    Especially for those doing physical labour or with mild to severe back a joint pain, an hour in Nhill Thai massage will leave you feeling like you have spent a week on a beach in tropical Thailand.<br /><br />

                    Feel free to contact us on the number below and to pay us a visit today! </p>
            </div>
            <div className='about-right-section'>
                <img src={ThaiGirl} alt="Thai girl in traditional costume strolling aimiably through a Thai temple" />
            </div>
        </div>
    )
}

export default About