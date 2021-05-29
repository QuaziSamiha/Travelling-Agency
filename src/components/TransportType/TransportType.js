import React, { useState } from 'react';
import { useParams } from 'react-router';
import Map from '../../images/Map.png';
import './TransportType.css';

const TransportType = () => {
    const { transportType } = useParams();

    const [passenger, setPassenger] = useState({
        source: '',
        destination: '',
        success: false
    });

    const handleBlur = (event) => {
        if (event.target.name === 'pick-from') {
            const passengerInfo = { ...passenger }
            passengerInfo.source = event.target.value;
            // passengerInfo.success = true;
            setPassenger(passengerInfo)
        }
        if (event.target.name === 'pick-to') {
            const passengerInfo = { ...passenger }
            passengerInfo.destination = event.target.value;
            // passengerInfo.success = true;
            setPassenger(passengerInfo)
        }
        event.preventDefault();
    }


    const handleSearch = (event) => {
        if (event.type === 'submit') {
            const passengerInfo = { ...passenger };
            passengerInfo.success = true;
            setPassenger(passengerInfo);
        }
        console.log(event.type);
        event.preventDefault();
    }


    return (
        <div className='destination-map' style={{ paddingTop: '250px', margin: '0 20%' }}>
            <h1 className='text-info'>Welcome to travel by {transportType}</h1>
            <div className='transport-destination'>
                {
                    passenger.success === false ?
                        <form onSubmit={handleSearch} className='border rounded-3 p-3 m-'>
                            <fieldset>
                                <label className='text-info' htmlFor="Pick from">Pick from</label> <br />
                                <input onBlur={handleBlur} className='form-control' type="text" name="pick-from" required /> <br />
                                <label className='text-info' htmlFor="Pick to">Pick to</label> <br />
                                <input onBlur={handleBlur} className='form-control' type="text" name="pick-to" required /> <br />
                                <input className='bg-info form-control' type="submit" value="Search" />
                            </fieldset>

                        </form>
                        :
                        <div className='bg-info text-dark p-4 m-5 border rounded-2'>
                            <h6>{passenger.source}</h6>
                            <h6>{passenger.destination}</h6>
                        </div>
                }
            </div>
            <div className='map-div'>
                <img src={Map} alt="" />
            </div>
        </div>
    );
};

export default TransportType;