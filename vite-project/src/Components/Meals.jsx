import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Styles/Meals.scss';
import MealsCard from './SharedComponents/MealsCard';
import Authorization from '../Auth/Authorization';

const Meals = () => {
  const checkAuth = Authorization(); 
  const [name, setName] = useState('apple');
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isAuthorization, setAuthorization] = useState(false)

  const findRecipe = async (name) => {
    if (!name.trim()) {
      setErrorMessage('Enter something to search');
      setMeal([]);
      return;
    }

     // Clear previous data
     setMeal([]);

    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

    try {
      const res = await axios.get(`${baseUrl}=${name}`);
      if (res.data.meals) {
        setMeal(res.data.meals);
        setErrorMessage('');
      } else {
        setMeal([]);
        setErrorMessage('No search results found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorMessage('Error fetching data');
    }
  };

  useEffect(() => {
  
    (async()=>{
      const isAuth = await checkAuth();
      setAuthorization(isAuth);
    })();
    if(isAuthorization){
      findRecipe(name);
    }
  }, [isAuthorization, loading]);

  return (
    <div className='menu '>
      <h1 className='text-center my-5'>Find and try new recipes with our extensive collection.</h1>

      <div className="form d-flex justify-content-center my-5">
        <form className="form-main me-2 w-50">
          <input
            className="form-control me-2"
            type="search"
            value={name}
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setName(e.target.value);
              setErrorMessage(''); // Clear error message when input changes
            }}
          />
        </form>
        <button
          className="btn btn-outline-success"
          type="submit"
          onClick={() => {
            setLoading(!loading);
            findRecipe(name);
          }}
        >
          Search
        </button>
      </div>

      {errorMessage && <div className="alert alert-danger text-center  mx-auto  w-75 w-md-50">{errorMessage}</div>}

      <div className="cardMain d-flex justify-content-center flex-wrap">
        {meal.map((value, key) => (
          <MealsCard
            key={value.idMeal || key}
            src={value.strMealThumb}
            title={value.strMeal}
            text1={value.strCategory}
            text2={value.strArea}
            instructions={value.strInstructions}
            ingredients={getIngredients(value)}
          />
        ))}
      </div>
    </div>
  );
};

const getIngredients = (meal) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }
  return ingredients;
};

export default Meals;
