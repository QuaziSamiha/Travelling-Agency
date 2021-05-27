import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../images/Urban Riders.png';

const Header = () => {
    return (
        <div className='fixed-top'>
            <nav className='navbar navbar-expand-md navbar-light bg-info'>
                <div className='container'>
                    <img className='navbar-brand logo' src={Logo} alt="" />
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                        <div className='navbar-nav'>
                            <Link className='nav-link m-2 text-light' to="/home">Home</Link>
                            {/* <Link className='nav-link m-2' to="/blog">Blog</Link> */}
                            <Link className='nav-link m-2 text-light' to="/destination">Destination</Link>
                            <Link to='/login'><button className='btn btn-danger px-4 m-2'>Login</button></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;