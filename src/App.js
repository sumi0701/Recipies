
import './App.css';
import React ,{useState,useEffect} from "react"; 
import Recipe from './Recipe';
import { create, all } from 'mathjs'

const App =()=>{
const APP_ID="e6dae0bc";
const APP_KEY ="43ac8b64095cd63ff8cc94a4f5f08fcb";
// const app_url=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

// const [counter,setCounter]=useState(0);

const [recipes,setRecipes] = useState([]);
const [search,setSearch] = useState("");
const [query,setQuery]=useState("");

useEffect(()=>{
  getRecipes();
},[query])

const getRecipes=async ()=>{
const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data=await response.json();
   setRecipes(data.hits);
   console.log(data.hits);

}


const updateSearch= e=>{
setSearch(e.target.value);
}

const getSearch =e=>{
  e.preventDefault();
  setQuery(search);
  setSearch("");
}


return(
<div className="App">
<form onSubmit={getSearch} className="search-form">
  <input className="seach-bar" type="text" value={search} onChange={updateSearch} />
    <button className="search-button" type="submit">
     Search
    </button>
  </form>
  <div className="recipes">
{recipes.map(recipe => (
<Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} 
image={recipe.recipe.image}
ingredients={recipe.recipe.ingredients}/>
))}
</div>
</div>
);
};

export default App;
