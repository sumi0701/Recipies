import  React  from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
        <h1>{title}</h1>
        <p className={style.ingredient}>Ingredients</p>
        <ol>{ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        <p className={style.calorie}> Calories : {calories}</p>
   
        <img className={style.image} src={image} alt="" />
     
        </div>
    );
};
export default Recipe;
