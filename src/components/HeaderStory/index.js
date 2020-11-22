import React from 'react';
import Video from '../../videos/videos-8.mp4';
import {CgArrowDownO} from 'react-icons/cg';
import '../HeaderSection/style.scss';

const HeaderStory = props => {
    return (
        <>
        <div className="story-container">

              <video playsInline autoPlay loop muted src={Video} type='video/mp4' />
              <h3>What makes us different?</h3>
              <p>We indulge you personally -- <br/>and honestly to nature...</p>
              <ul className='actions'>
                <li><a href='#our-story' className='solo'><CgArrowDownO/></a></li>
              </ul>

        </div>
        </>
    )
}

export default HeaderStory
