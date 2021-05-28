import React from 'react';
import { useParams } from 'react-router';

const DestinationMap = () => {
    const {transportType} = useParams();
    
    return (
        <div style={{paddingTop: '250px', margin: '0 20%'}}>
            <h1>This is destination and map</h1>
            <h1>Welcome to travel by {transportType}</h1>
        </div>
    );
};

export default DestinationMap;