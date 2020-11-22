import React from 'react';
import Pic from '../../images/bg/bedroom.jpg';
import Pic1 from '../../images/bg/office.jpg';
import Pic2 from '../../images/bg/business.jpg';
import '../AboutUs/style.scss';

const StoryElementsX = () => {
    return (
        <>
        <div className='real-it'><br/>
         <h4>We put you first to choose your green companions indoors</h4><br/>
         <br/>
        </div>
        <div className='real-top'>
            <div className='real-container'>
                       <h4>Bedrooms </h4>
                       <img src={Pic} className='pic-1' alt='real'/>         
           </div> 
           <div className='real-container'>
                       <h4>Office</h4>
                       <img src={Pic1} className='pic-1' alt='real'/>
           </div> 
           <div className='real-container'>
                       <h4>Business</h4><br/>
                       <img src={Pic2} className='pic-1' alt='real'/>
           </div> 
        </div> 
        <br/> 
        </>
    )
}

export default StoryElementsX
