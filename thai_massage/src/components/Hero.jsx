import React from 'react'
import Thailand1 from '../Images/Thailand (1).jpg'
import Massage1 from '../Images/Massage (1).jpg'
import Massage2 from '../Images/Massage (4).jpg'
import Massage3 from '../Images/Massage (2).jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>The best place to relax in Nhill...</h1>
            </div>
            <div className='hero-images'>
                <img src={Massage1} alt="Therapeutic Thai massage" />
                <img src={Thailand1} alt="An amazing temple in Thailand" />
                <img src={Massage3} alt="Therapeutic Thai massage" />
            </div>

        </div>
    )
}

export default Hero