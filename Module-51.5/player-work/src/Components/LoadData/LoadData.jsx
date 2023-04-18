import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';
import './LoadData.css'
const LoadData = (props) => {
    const handleCart = props.handleCart;
    const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  
    return (
        <div className='product-container'>
            {
                users.map((user,index)=>(
                    <ShowData user={user} key={index} handleCart={handleCart}> </ShowData>
                ))
            }
        </div>
    );
};

export default LoadData;