import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import '../Styles/Navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/darklogo.png';
import { CiLogin, CiLogout } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";



const Navbar = () => {
  // Initialize `isLogged` state based on the presence of the token
  const [isLogged, setIsLogged] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogOut = () => {
     const token = localStorage.getItem("token");
     if (token) {
       // Clear localStorage
       localStorage.clear();
      
   
       // Show toast first
       toast.success("Logged Out Successfully!");
   
       // Delay the navigation and state update
       setTimeout(() => {
          setIsLogged(false);
         navigate('/login');
       }, 3000); 
     }
   };
   
   
  return (
    <>
       <ToastContainer />
      <div className="navbar" style={{ margin: '0', padding: '0' }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img style={{ width: "100px" }} src={Logo} alt="logo here" />
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
          
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className='nav-link active' to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link active' to='/contact'>Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className='nav-link active' to='/meals'>Meals</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link active' to='/gallery'>Gallery</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link active' to='/Blog'>News</Link>
                </li>
              </ul>

              {isLogged ? (
                <ul className='navbar-nav registration'>
                  <li className='nav-item reg-btn mx-2 mx-md-3 mx-lg-2 my-2 my-md-3 my-lg-2'>
                    <Link className='nav-link active btn-to' to='/login' onClick={handleLogOut}>
                      Logout <span><CiLogout /></span>
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className='navbar-nav registration'>
                  <li className='nav-item reg-btn mx-2 mx-md-3 mx-lg-2 my-2 my-md-3 my-lg-2'>
                    <Link className='nav-link active btn-to' to='/signup'>
                      Signup <span><SiGnuprivacyguard /></span>
                    </Link>
                  </li>
                  <li className='nav-item reg-btn mx-2 mx-md-3 mx-lg-2 my-2 my-md-3 my-lg-2'>
                    <Link className='nav-link active btn-to' to='/login' onClick={() => setIsLogged(true)}>
                      Login <span><CiLogin /></span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
