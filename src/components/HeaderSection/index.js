import React from 'react'
import {Link} from 'react-router-dom';
import Button from '../forms/Button';
import '../../default.scss';
import '../HeaderSection/style.scss';
import Video from '../../videos/videos-2.mp4';


 const HeaderSection = () => {
    return (
        <>
            
            <div className='hero-container'>
              <video playsInline autoPlay loop muted src={Video} type='video/mp4' />
              <h1>Urban Garden</h1>
              <p>Adopt your new family home!</p>
           
            <div className='hero-btns'>
                
                <Link to='/search'>
                <Button
                buttonStyle='btn--primary'
                button='btn--large' 
                > GET STARTED
                </Button>
                </Link>
                
                
              
             
              <Link to='/registration' className='hero-btnx'>
              <Button
              buttonStyle='btn--outline'
              button='btn--large' 
             >JOIN OUR COMMUNITY
             </Button>
             </Link>
             </div>
            
        </div>  
            
        </>
    )
}

export default HeaderSection
