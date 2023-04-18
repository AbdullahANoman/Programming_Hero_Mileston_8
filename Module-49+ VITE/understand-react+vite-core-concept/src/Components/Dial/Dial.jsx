import React from 'react';
import InsideDial from '../InsideDial/InsideDial';

const Dial = (props) => {
    const {steps} = props;
    return (
        <div className='border'>
            <h1>This Is Dial Pad</h1>
            <h4>Steps Count : {steps}</h4>
            <InsideDial steps={steps}></InsideDial>
        </div>
    );
};

export default Dial;