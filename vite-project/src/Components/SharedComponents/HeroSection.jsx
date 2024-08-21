import React from 'react'
import "../../Styles/Home.scss"


const HeroSection = ({heading, subHeading}) => {
  return (
   
             <div className="hero-section container-fluid d-flex align-items-center">
            <div className="row">
            <div className="hero-left col-md-8 col-lg-8">

              
                  {/* <h1>Discover Recipes, Latest News, Read & Share Blogs, and Browse Stunning Photos. </h1> */}
                  {/* <p>Create and explore blogs, find your next favorite recipe, stay updated with the latest news, and browse stunning photos from around the world.</p> */}

                  
                  <h1>{heading}</h1>
                  <p>{subHeading}</p>
              </div>
            </div>
           
          </div>
    
  )
}

export default HeroSection
