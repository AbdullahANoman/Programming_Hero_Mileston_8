import React from 'react';
import './SideCart.css'
const SideCart = (props) => {
    const carts = props.carts
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            {
                carts.map((cart,index)=>(
                    <div className='cart-product'>
                        <li>Name :{cart.name}</li> 
                        <p>Price : {cart.price}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default SideCart;