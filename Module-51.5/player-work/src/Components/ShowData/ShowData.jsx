import React from 'react';
import './ShowData.css'
const ShowData = (props) => {
    const {movieName,Price,poster} = props.user
    const handleCart = props.handleCart;
    return (
        <div className='product'>
            <img src={poster} alt="" />
            <h2>{movieName}</h2>
            <h3>Price: {Price}</h3>
            <button onClick={()=>handleCart(movieName,Price)}>Add To Buy</button>
        </div>
    );
};

export default ShowData;