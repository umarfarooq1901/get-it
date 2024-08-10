import React from 'react'
import "../../Styles/Home.scss"


const HeroSection = () => {
  return (
   
             <div className="hero-section container-fluid d-flex align-items-center">
            <div className="row">
            <div className="hero-left col-md-8 col-lg-8">
                  <h1>Discover Recipes, Latest News, Read & Share Blogs, and Browse Stunning Photos. </h1>
                  {/* <h1>{props.subheading}</h1> */}
                  <p>Create and explore blogs, find your next favorite recipe, stay updated with the latest news, and browse stunning photos from around the world.</p>
                  
              </div>
            </div>
           
          </div>
    
  )
}

export default HeroSection
