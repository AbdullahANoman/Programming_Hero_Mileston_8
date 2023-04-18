import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    const {name,price,ram} = props.item;
    return (
        <div>
            <h1>My Device Name Is {name}</h1>
            <h2>This Device Price is {price}</h2>
            <DeviceDetails ram={ram}></DeviceDetails>
        </div>
    );
};

export default Device;