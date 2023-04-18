import React, { useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps,setSteps] = useState(0);
    const handleSteps =() =>{
        setSteps(steps+5)
    }
    return (
        <div className='border'>
            <h2>This is my Smart Watch</h2>
            <h1>Steps : {steps}</h1>
            <button onClick={handleSteps}>De dour ....</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;