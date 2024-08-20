import styles from "./Description.module.css";
import {Component} from "react";
import React from "react";

export function Description() {
 
    function recipeAuthor() {
        const authorLink = "https://messinthekitchen.com/one-pot-mediterranean-chicken-and-rice/";
        const authorPhoto = "https://messinthekitchen.com/wp-content/uploads/2021/03/ap-pfp-360x361.jpg";
        const authorName = "Nicole Beaulieu";
        
        return (
            <div className = {styles.recipeAuthorBlock}>
               <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
               <div>
                  <h3>{authorName}</h3>
                  <a href={authorLink}>Blog name</a> 
               </div>
            </div>
         );
    }
   
 }

export default class RecipeDescription extends React.Component {
    render() {
        <div> 
            <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
            </div>
        </div>       
    };
}