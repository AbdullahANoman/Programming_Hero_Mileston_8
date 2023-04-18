import React from 'react';
import './ShowData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
const ShowData = (props) => {
    const {strMeal,strMealThumb,strArea,strCategory,idMeal} = props.user;
    const showSummary = props.showSummary;
    return (
        <>
            <div className='child'>
                <img className='img-cut' src={strMealThumb} alt="" />
                <h2>Name :{strMeal}</h2>
                <h3>Area : {strArea}</h3>
                <h3>Category : {strCategory}</h3>
                <button onClick={()=>showSummary(idMeal)} className='add-to-cart'>Add To Cart <FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </>
    );
};

export default ShowData;