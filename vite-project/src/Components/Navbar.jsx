import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/darklogo.png';
import { CiLogin, CiLogout } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";
import '../Styles/Navbar.scss'
import axios from 'axios';

const Navbar = ({ isLogged, handleLogOut }) => {

    const [email, setEmail] = useState("");
    const token = localStorage.getItem('token');
    const getData = async ()=>{
  
      try {
          const baseUrl = 'http://localhost:4000';
          const res = await axios.get(`${baseUrl}/user/details/${token}`);
          setEmail(res.data.getUser.email);
          // console.log(res.data.getUser.email)
        } catch (error) {
          console.log(error);
          
        }
       
      }

        useEffect(()=>{
          if(token){

            getData()
          }

          
        }, [token])



  return (
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
        {email !== '' ?(    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item rounded text-white text-center p-2" style={{backgroundColor: '#f08829'}}>
                {email}
              </li>
              </ul>) : (    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
               {}
              </li>
              </ul>) }

        



            <ul className='navbar-nav registration'>
              {isLogged ? (
                <li className='nav-item reg-btn mx-2 mx-md-3 mx-lg-2 my-2 my-md-3 my-lg-2'>
                  <button className='nav-link active btn-to' onClick={handleLogOut}>
                    Logout <span><CiLogout /></span>
                  </button>
                </li>
              ) : (
                <>
                  <li className='nav-item reg-btn mx-2 mx-md-3 mx-lg-2 my-2 my-md-3 my-lg-2'>
                    <Link className='nav-link active btn-to' to='/signup'>
                      Signup <span><SiGnuprivacyguard /></span>
                    </Link>
                  </li>
                  <li className='nav-item reg-btn mx-2 mx-md-3 mx-lg-2 my-2 my-md-3 my-lg-2'>
                    <Link className='nav-link active btn-to' to='/login'>
                      Login <span><CiLogin /></span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
