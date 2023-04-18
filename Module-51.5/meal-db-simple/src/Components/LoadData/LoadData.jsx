import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import ShowData from '../ShowData/ShowData';
import './LoadData.css'
const LoadData = () => {
    const [users,setUsers] = useState([]);
    const [carts,setCarts] = useState([])
    // console.log(users)
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setUsers(data.meals))
    },[])
    const newArray = [];
    const showSummary = (id) =>{
        // console.log(id)
        const value =  users.find(user=>(user.idMeal==id));
        setCarts([...carts,value])
        // newArray.push(value)
        // console.log(newArray)
        
    }
    // useEffect(()=>{
    //     const showSummary = ()=>{
    //         const value = users.find(user=>(user.idMeal === id))
    //         newArray.push(value)
    //     }
    // },[newArray])
    return (
        <>
        <div className='parent'>
            <div className='father'>
            {
                users.map((user,index)=>(<ShowData key={index} user={user} showSummary={showSummary}></ShowData>))
            }
            </div>
            <div>
                <Cart carts={carts} ></Cart>
            </div>
        </div>
        </>
    );
};

export default LoadData;