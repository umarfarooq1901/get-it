import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import Loading from './Components/SharedComponents/Loading.jsx';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
// import Meals from './Components/Meals.jsx'

const Meals = React.lazy(()=> delay(import('./Components/Meals.jsx')));
const Gallery = React.lazy(()=> delay(import('./Components/Gallery.jsx')));
const Blog = React.lazy(()=> delay(import('./Components/Blog.jsx')))



const delay = async (promise)=>{

  await new Promise((resolve)=>{
    setTimeout(resolve, 2000);
  });
  return promise;
}

const App = () => {
  return (
        <BrowserRouter>

        <Navbar/>
          <Routes>
                <Route path='/' element = {<Home/>}/>
                <Route path = '/contact' element = {<Contact/>}/>
                <Route path = '/signup' element = {<Signup/>}/>
                <Route path = '/login' element = {<Login/>}/>
                <Route path='/meals' element = {<Suspense fallback = {<Loading/>}> <Meals/></Suspense>}/>
                <Route path = '/gallery' element = {<Suspense fallback = {<Loading/>}><Gallery/></Suspense>}/>
                <Route path = '/blog' element = {<Suspense fallback = {<Loading/>}><Blog/></Suspense>}/>
                

          </Routes>
        <Footer/>
        
        </BrowserRouter>
  )
}

export default App

