import React from 'react'
import '../Styles/Contact.scss'
import '../Styles/Home.scss'
import HeroSection from './SharedComponents/HeroSection'



const Contact = () => {
  return (
    <>
    <div className='contact'>
    <HeroSection
    
        heading="Get in Touch with Us"
        subHeading= "Feel free to reach out for inquiries, support, or just to say hello. We're here to help!"
    
    />

    <section className="contact-section py-5 bg-light">
  <div className="container">
    <h2 className="text-center">Get in Touch</h2>
    <div className="row mt-4">
      <div className="col-md-6">
        <form >
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" id="message" rows="4"></textarea>
          </div>
        </form>
          <button type="submit" className="btn btn-success mt-3"><a href="/login" style={{color: "white", textDecoration:"none"}}>Send Message</a></button>
      </div>
      <div className="col-md-6 p-5">
        <p>You can reach us at:</p>
        <p>Email: umardev760@gmail.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: Kashnir, Srinagar, India</p>
      </div>
    </div>
  </div>
</section>
     
    </div>
    </>
  
  )
}

export default Contact
