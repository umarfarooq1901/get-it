import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GalleryCard from './SharedComponents/GalleryCard';
import '../Styles/Gallery.scss'
import Authorization from '../Auth/Authorization';

const Gallery = () => {
  const checkAuth = Authorization(); //HOC to check the authorization of the user
            const [photos, setPhotos] = useState([]);
            const [loading, setLoading] = useState(true);
            const [query, setQuery] = useState('nature');
            const [errorMessage, setErrorMessage] = useState('');
            const [isAuthorization, setAuthorization] = useState(false);


        const fetchPhotos = async (query)=>{

            if(!query.trim()){
              setErrorMessage('Enter Something to Search');
              setPhotos([]);
              return;
            }
          const baseUrl = "https://api.pexels.com/v1/search?query";


          try {
            const res = await axios.get(`${baseUrl}=${query}`,

              {
                headers:{
                  Authorization: `cLym1XYMfSy2WH10KzYqZMwo68oqwROayBEAG3RAf1nh1GLiJgy8lYtj`
                 }
              });

              if(res.data.photos){
                setPhotos(res.data.photos);
                setErrorMessage('');
              }
              else{
                setPhotos([]);
                setErrorMessage('No search results found');
                console.log('no result found');
              }
         
            
          } catch (error) {
            console.error('Error fetching data:', error);
            setErrorMessage('Error fetching data');
          }
           

        };


        useEffect(()=>{
            (async()=>{
              const isAuth = await checkAuth();
              setAuthorization(isAuth);
            })()

            if(isAuthorization){
              fetchPhotos(query);
            }


             
        }, [isAuthorization, loading])




  return (
    <div className='gallery'>
        <h1 className="text-center my-5">Search and view beautiful photos curated just for you.</h1>

       <div className="form d-flex justify-content-center my-5">
         <form className="form-main me-2 w-50">
          <input
            className="form-control me-2"
            type="search"
            value={query}
            placeholder="Search"
            aria-label="Search"
            onChange={(e)=>{
              setQuery(e.target.value);
              setErrorMessage(''); // Clear error message when input changes
            }}
          
           />
        </form>
        <button className="btn btn-outline-success"  type="submit" onClick={()=>{
          setLoading(!loading);
          fetchPhotos(query);

        }}> Search </button>
      </div>

      {errorMessage && <div className='alert alert-danger text-center mx-auto w-75 w-md-50'> {errorMessage}</div>}
                  <div className="galleryMain d-flex justify-content-center flex-wrap">
                    
                      {photos.map((value, index)=>(

                          <GalleryCard
                              key = {value.id || index}
                             src = {value.src.original}
                             photographer = {value.photographer}
                             url = {value.url}
                          
                          
                          />
                      ))}
                      
                      
                      
                    
                  </div>


    </div>
  )
}

export default Gallery



