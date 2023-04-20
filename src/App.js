import { useState, useEffect } from 'react';
import Recipe from './Recipe.js';

import './App.css';


const App = () => {

  const APP_ID = 'fcfa9e33';
  const APP_KEY = '8c47d17a1eefce6eb7f07a82812034b2';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [Query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [Query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${Query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updatetSearch =e =>{
     setSearch(e.target.value);
    //  console.log(search);
     
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch(''); 
  }
  return (
    <div className='App'>
      <div className='App-header'>
      <h1>Recipe App</h1>
     
      </div>
      
      <form className='search-form' onSubmit={getSearch}> 
        <input className='search-bar' 
        type='text' 
        value={search} 
        onChange={updatetSearch}
        placeholder='Search recipe'/>
        <button className='search-button' type='Submit'>Search</button>
      </form>
      

      <div className='recipe'>
      {recipes.map((recipe) => (
        <Recipe 
        key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
