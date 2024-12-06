import React from 'react'
import Footer from './Footer'
import WaterLily from '../Images/water-lily-with-reflection.jpg'

const Services = () => {
    return (
        <div>

            <div className="services">
                <div className='services-left'>
                    <h1>Price List</h1>

                    {/* use grid-area for four properties 
 */}
                    <div className="container">
                        <div className="item1">30 mins</div>
                        <div className="item2">45 mins</div>
                        <div className="item3">60 mins</div>
                        <div className="item4">90 mins</div>
                        <div className="item5">120 mins</div>
                        <div className="price1">$60</div>
                        <div className="price2">$80</div>
                        <div className="price3">$90</div>
                        <div className="price4">$100</div>
                        <div className="price5">$180</div>
                    </div>
                </div>
                <div className='services-right'>
                    <img src={WaterLily} alt="" />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    )
}

export default Services