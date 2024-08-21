import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Footer.scss'
import Logo from '../assets/darklogo.png';


const Footer = () => {
  return (

    <>


<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-body-secondary">&copy; 2024 getit, Inc</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
  
      <img src={Logo} style={{width: '5rem'}} alt="#"/>
    </a>

    <ul class="nav col-md-4 justify-content-end">
    
    <li className="nav-item mb-2"><Link className="nav-link px-2 text-muted" to= '/'>Home</Link></li>
          <li className="nav-item mb-2"><Link className="nav-link px-2 text-muted" to= '/contact'>Contact</Link></li>
          <li className="nav-item mb-2"><Link className="nav-link px-2 text-muted" to= '/meals'>Meals</Link></li>
          <li className="nav-item mb-2"><Link className="nav-link px-2 text-muted" to= '/gallery'>Gallery</Link></li>
          <li className="nav-item mb-2"><Link className="nav-link px-2 text-muted" to= '/blog'>News</Link></li>
    </ul>
  </footer>
</div>
    </>
   
  )
}

export default Footer
