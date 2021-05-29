import React, { useState } from 'react';
import { useParams } from 'react-router';
import Map from '../../images/Map.png';
import Bike from '../../images/bike.png';
import Car from '../../images/car.png';
import Bus from '../../images/bus.png';
import Train from '../../images/train.png'
import People from '../../images/peopleicon.png';
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

    let transport;
    if (transportType === 'bike') {
        transport = Bike;
    }
    if (transportType === 'car') {
        transport = Car;
    }
    if (transportType === 'bus') {
        transport = Bus;
    }
    if (transportType === 'train') {
        transport = Train;
    }

    return (
        <div className='destination-map'>
            <div className='transport-destination'>
                <h1 className='text-info'>Welcome to travel by {transportType}</h1>
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
                        <div className='bg-info text-dark p-5 m-2 border rounded-2'>
                            <div className='bg-primary p-3 m-3 border rounded-2'>
                                <h6>{passenger.source}</h6>
                                <h6>{passenger.destination}</h6>
                            </div>
                            <div className='icons bg-light p-3 m-3 border rounded-2'>
                                <img className='transport-img' src={transport} alt="" /> <p><b>{transportType}</b></p>
                                <img className='people-img' src={People} alt="" /> <p><b>4</b></p>
                                <p className='px-5'><b>$67</b></p>
                            </div>
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