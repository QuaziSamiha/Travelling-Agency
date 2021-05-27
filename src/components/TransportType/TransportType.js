import React from 'react';
import { useParams } from 'react-router';

const TransportType = () => {

    const {transportType} = useParams();
    // console.log(transportType);
    return (
        <div style={{paddingTop: '250px', margin: '0 20%'}}>
            <h1>Welcome to travel by {transportType}</h1>
        </div>
    );
};

export default TransportType;