import React from 'react';
import './Card.css'
const Card = () => {
    const myStyle = {
        color:'red',
        backgroundColor : 'blue',
        marginTop : '20px'
      }
    return (
        <div>
            <img style={{width:'200px',border:'2px solid red', padding:'20px'}} src="/public/DALL·E 2023-02-28 00.59.45 - make AI art .png" alt="" />
            <h1 style={myStyle} className='test' >Ak 47</h1>
            <h2 className='test'>Price : $2000</h2>
        </div>
    );
};

export default Card;