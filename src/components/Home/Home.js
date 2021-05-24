import React, { useEffect, useState } from 'react';
import BackgroundImg from '../../images/Bg.png';
import './Home.css';
import fakeData from '../../fakedata/fakeData.json';
import Transport from '../Transport/Transport';

const Home = () => {

    const [transports, setTransports] = useState(fakeData);
    useEffect(() => {
        setTransports(fakeData);
    })

    return (
        <div>
            <img className='bg-img' src={BackgroundImg} alt="" />
            <div className='transport-card'>
                {
                    transports.map((transport, index) => <Transport key={index} transport={transport}></Transport>)
                }
            </div>
        </div>
    );
};

export default Home;