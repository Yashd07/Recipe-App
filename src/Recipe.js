import React from "react";
import style from './recipe.module.css';


const Recipe = ({title ,calories, image , ingredients}) =>{
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p><strong>calaories</strong>: {calories}</p>
            <img className={style.image} src={image} alt="alt image"/>
        </div>
    );
}

export default Recipe;
