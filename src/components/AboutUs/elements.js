import React from 'react';
import story2 from '../../images/bg/onion.jpg';
import '../AboutUs/style.scss';
const StoryElements1 = () => {
    return (
        <>
         <section id='Parenthood'>
           <div className='story-container'>
               <div className='wrap1'>
                  <div className='content2'>
                      <h3 className='inner_item'>Plants ParentHood</h3>
                   
                      <span className='inner-content-2'><img src={story2} className='story-2' alt='Parenting'/>
                      <p>
                       Experience wonderful plant parenthood as we’re here to inspire 
                         confidence in the next generation of plant parents. Every plant from Urban Garden comes
                         with care information and the support of our team of knowledgable plant parents.Because we 
                         understand, plant category is difficult to navigate, especially with our shopping sprees
                         and expectations evolve. Our solution? Take the best parts of urban garden supply
                         center and create a seamless shopping experience without getting your 
                         hands too dirty. 
                        </p></span>
                      
                  </div>
              </div>
          </div> 
         </section>
        </>
    )
}

export default StoryElements1
