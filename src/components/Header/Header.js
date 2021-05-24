import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../images/Urban Riders.png';

const Header = () => {
    return (
        <div className='fixed-top'>
            <nav className='navbar navbar-expand-md navbar-light'>
                <div className='container'>
                    {/* <div className='logo'> */}
                    <img className='navbar-brand logo' src={Logo} alt="" />
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    {/* </div> */}
                    <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                        <div className='navbar-nav'>
                            <Link className='nav-link m-2' to="/home">Home</Link>
                            <Link className='nav-link m-2' to="/blog">Blog</Link>
                            <Link className='nav-link m-2' to="/destination">Destination</Link>
                            <button className='btn btn-danger px-4 m-2'>Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;