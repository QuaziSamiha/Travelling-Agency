import React from 'react';
import BackgroundImg from '../../images/Bg.png';
import './Home.css';
const Home = () => {
    return (
        <div>
            <img className='bg-img' src={BackgroundImg} alt="" />
        </div>
    );
};

export default Home;