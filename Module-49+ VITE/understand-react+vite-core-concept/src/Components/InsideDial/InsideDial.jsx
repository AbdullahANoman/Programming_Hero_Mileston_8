import React from 'react';

const InsideDial = (props) => {
    const {steps} = props
    return (
        <div style={{border:'2px solid purple'}}>
            <h1>Inside Dial </h1>
            <h3>Inside Dial Jsx steps count {steps}</h3>
        </div>
    );
};

export default InsideDial;