import React from 'react';

const DeviceDetails = (props) => {
    const {ram} = props;
    console.log(props)
    return (
        <div>
            <h4>Device ram is : {ram}</h4>
        </div>
    );
};

export default DeviceDetails;