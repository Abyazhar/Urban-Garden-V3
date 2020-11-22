import React from 'react';
import story1 from '../../images/bg/devon-janse.jpg';
import '../AboutUs/style.scss';

const AboutUs = props => {
    return (
        <>
            <section id='our-story'>
            <div className="story-container">
                <div className="wrapper">
                    <div className="content">
                        <h3 className='inner'>Our Story</h3>
                        <span className='inner-content'><img src={story1} className='story-1' alt="Light"/>
                        <p>Urbanization dawn to be our greatest achievements. Nevertheless, it flawed 
                        our touch with nature. This is the seed that fuels Urban Garden, to give chances for 
                        urbaners reconnect with nature. And, relive life in the city with greens not just 
                        walls of concretes.
                        Plants make us happier, healthier, more efficient and boost our creativity. 
                        They even clean the air we breathe. But all our modern city-living has us 
                        indoors a lot. So we thought: why not bring the outdoors in? We think everyone
                        deserves to have their own personal plant oasis. And, we think finding your new plant 
                        should be, well, easy.</p></span>
                    </div>
                </div>
            </div>
        </section>  
        </>
    )
}

export default AboutUs
