import React from 'react'
import '../Styles/Navbar.scss'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
   <>
        <div className="navbar">


    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
         <div className="container-fluid">
          <a className="navbar-brand  " href="#"> <img style={{width: "100px" }} src={Logo} alt="logo here" />
          </a>
  
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
             </button>
     <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
      
                 <Link className='nav-link active ' to = '/'>Home</Link>
               </li>
                     <li className="nav-item">
     
                     <Link className='nav-link active ' to = '/contact'>Contact</Link>
                     </li>
                           <li className="nav-item">
                             <Link className='nav-link active  ' to = '/meals'>Meals</Link>
                         </li>
                         <li className='nav-item'>
                              <Link className='nav-link active' to= '/gallery'>Gallery</Link>
                         </li>

                         <li className='nav-item'> <Link className='nav-link active' to='/Blog'>Blog</Link> </li>
       
         </ul>


         <ul className='navbar-nav '>
               <li className='nav-item'>
                    <Link className='nav-link active' to = '/signup'>Signup</Link>
               </li>

               <li className='nav-item'>
                         <Link className='nav-link active' to = '/login'>Login</Link>
               </li>
         </ul>
    </div>
  </div>
</nav>
        </div>
   
   </>
  )
}

export default Navbar
