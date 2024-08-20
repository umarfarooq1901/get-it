import React from 'react'
import '../Styles/Home.scss'
import HeroSection from './SharedComponents/HeroSection'
import Recipe from '../assets/features/recipe.jpg'
import News from '../assets/features/news.jpg'
import GalleryPic from '../assets/features/gallerypic.jpg'
import blogpic from '../assets/features/blogpic.jpg'
import About from '../assets/about.jpg'
import '../Styles/Hero.scss'
import { FaArrowRight } from "react-icons/fa";


const Home = () => {
  return (
    <div className='home'>
   
        <HeroSection/>

        <section className='features-section my-5'>

          <div className="container text-center">
                <h1>Our Key Features</h1>

                <div className="row my-5">
                  <div className="col-md-3">
                    <div className="feature-card">
                    <h3>Delicious Recipes</h3>
                      <img src={Recipe} alt="Delicious Recipes" className='img-fluid rounded my-3' />
                    <p>Find a wide range of recipes to try out in your kitchen.</p>
                    </div>
                  
                  </div>

                  <div className="col-md-3">
                    <div className="feature-card">
                    <h3>Latest News</h3>
                    <img src={News} alt="Delicious Recipes" className='img-fluid rounded my-3' />
                    <p>Stay updated with the latest news from around the world.</p>
                    </div>
                
                  </div>
                          <div className="col-md-3">
                            <div className="feature-card">
                            <h3>Stunning Photos</h3>
                            <img src={GalleryPic} alt="Delicious Recipes" className='img-fluid rounded my-3' style={{height: "460px"}} />
                            <p>Explore beautiful images curated just for you.</p>
                            </div>
                          </div>
                          <div className="col-md-3">
        <div className="feature-card ">
          <h3 >Create & Read Blogs</h3>
          <img src={blogpic} alt="Create & Read Blogs" className="img-fluid rounded my-3" />
          <p>Share your thoughts and read blogs from others in the community.</p>
        </div>
      </div>

                </div>
          </div>

        </section>

        <section className='about-section my-5 '>
                <div className="container bg-light p-4">
                  <div className="row align-items-center ">
                    <div className="col-md-6 col-sm-12 mb-4 mb-md-0">
                      <img src={About} alt="about" className='img-fluid rounded'  />
                    </div>
                    <div className="col-md-6 col-sm-12">
                    <h2>About Us</h2>
                    <p>
                     We are passionate about sharing the best recipes, news, and photos with our community. Our platform is designed to be your one-stop destination for culinary inspiration, the latest updates, and visual storytelling.
                    Whether you want to <a href="/create-blog" className="text-primary">create</a> or <a href="/blogs" className="text-primary">view blogs</a>, you'll find everything you need right here.
                    </p>
                    </div>
                  </div>
                </div>
        </section>

        <section className="cta-section text-center py-5">   
          {/* cta: call to action */}
  <div className="container">
    <h2>Join Our Community Today</h2>
    <p className = 'mt-3'>Create an account to start sharing your blogs, discovering new recipes, and exploring stunning photos.</p>
    <button className="btn btn-success btn-lg my-3"><a href="/signup" style={{color:"white", textDecoration:"none"}}>Get Started <span className='mx-2'><FaArrowRight/></span></a></button>
  </div>
</section>



          
    </div>
  )
}

export default Home
