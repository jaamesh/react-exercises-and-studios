import './styles.css';

function Button() {

   return ( 
         <button onClick={onMoreLearn}>
            Learn More
         </button>
   );
}

function onMoreLearn() {
   alert("I was takin' a bath!")
}

export default Button;