import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    // const {strMeal,strMealThumb,strArea,strCategory,idMeal} = props.carts;
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            {
                props.carts.map((pd)=>(
                    <>
                        <h2 >Name : {pd.strMeal}</h2>
                        <img className='sizeImage' src={pd.strMealThumb} alt="" />
                    </>
                ))
            }
        </div>
    );
};

export default Cart;