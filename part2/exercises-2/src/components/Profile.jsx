import './styles.css';
import Button from './Button';
import oceans from './oceans.json';


const oceanList = oceans.map(ocean =>
   <div key={ocean.id}>
      <img src={ocean.image} />
   </div>
);

function Profile()
{
   return(
      <>
         <h3>Coming Soon! Profiles of Ocean creatures</h3>
         <ol>{oceanList}</ol>
         <Button />
      </>  
   );
}

export default Profile;