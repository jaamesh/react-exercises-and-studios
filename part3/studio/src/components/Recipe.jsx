import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.cookingclassy.com/";
   let authorPhoto = "https://www.cookingclassy.com/wp-content/uploads/2019/08/jaclyn-bell@2x.jpg";
   let authorName = "Jaclyn";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["tomatoes","cilantro","jalapeno","red onion","garlic"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Fresh Homemade Salsa</h1>
            <p>The Best Homemade Salsa Recipe! This homemade restaurant-style Salsa is one of my most frequently made recipes! It’s perfect served with tortilla chips or as a topping over your favorite Mexican food, like tacos, burritos, taquitos and so forth. Homemade salsa is the best party dish around, the perfect Super Bowl party food and a healthy after school snack!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="" alt="" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
