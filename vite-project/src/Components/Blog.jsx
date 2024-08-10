import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Blog.scss';
import BlogCard from './SharedComponents/BlogCard';
import Authorization from '../Auth/Authorization';


const Blog = () => {
    const checkAuth = Authorization();  //HOC to check the authorization of the user
    const [query, setQuery] = useState('technology');
    const [blog, setBlog] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isAuthorization, setAuthorization] = useState(false);

    const fetchNews = async (query) => {

        if (!query.trim()) {
            setErrorMessage('Enter Something to Search');
            setBlog([]);
            return;
        }
        
        

        try {
            const baseUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=08d398d49b434c46a5f461c6c9f1991d`;
            const res = await axios.get(`${baseUrl}`);
            if(res.data.articles){
                const filteredArticles = res.data.articles.filter(
                    (article) => article.urlToImage && article.urlToImage.trim() !== ''
                );
                
                setBlog(filteredArticles);
                setErrorMessage('');
            }
            else{
                setBlog([]);
                setErrorMessage("No search results found");
                console.log("No search results found")
            }

       

          
            
           
        } catch (error) {
            setErrorMessage('Error fetching news');
            setBlog([]);
        }
    };

        useEffect(()=>{
            (async()=>{
                const isAuth = await checkAuth();
                setAuthorization(isAuth);
            })();
            if(isAuthorization){
                fetchNews(query);
            }
          
        }, [isAuthorization])




    // Initial fetch on component mount
    // useEffect(() => {
    //     fetchNews(query);
    // }, []);

    return (
  <>
   
        <div className='blog'>
            <h1 className='text-center my-5'>Stay informed with the latest news articles</h1>

            <div className="form d-flex justify-content-center my-5">
                <form className="form-main me-2 w-50">
                    <input
                        type="search"
                        className='form-control me-2'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>

                <button
                    className="btn btn-success"
                    type='button'
                    onClick={() => fetchNews(query)}
                >
                    Search
                </button>
            </div>

            {errorMessage && <div className='alert alert-danger text-center mx-auto w-75 w-md-50'>{errorMessage}</div>}

            <div className="blog-Main-Card d-flex justify-content-center flex-wrap">
                {blog.map((value, key) => (
                    <BlogCard
                        key={value.source.id || key}
                        src={value.urlToImage}
                        title={value.title}
                        desc={value.description}
                        publish={value.publishedAt}
                        content = {value.content}
                        author = {value.author}
                        url = {value.url}
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default Blog;





// const url = `https://newsapi.org/v2/everything?q=${userValue}&apiKey=08d398d49b434c46a5f461c6c9f1991d`;


// in upper filter i can also use this

//   const res = await axios.get(`${baseUrl}`);
// const articles = res.data.articles;
// const filteredArticles = [];

// for (let article of articles) {
//     if (article.urlToImage && article.urlToImage.trim() !== '') {
//         filteredArticles.push(article);
//     }
// }

// setBlog(filteredArticles);
// setErrorMessage('');




// const res = await axios.get(`${baseUrl}`);

// const filteredArticles = res.data.articles.filter(article => {
//     if (article.urlToImage && article.urlToImage.trim() !== '') {
//         return true;
//     } else {
//         return false;
//     }
// });

// setBlog(filteredArticles);
// setErrorMessage('');
