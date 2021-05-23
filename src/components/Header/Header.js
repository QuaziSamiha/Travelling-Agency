import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <a href="#" className='navbar-brand'>Urban Riders</a>
            {/* <div> */}
                <ul>
                    <div className="container-fluid nav">
                        <li className='nav-item'>
                            <Link className='nav-link' to='/home'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/destination'>Destination</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/blog'>Blog</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/contact'>Contact</Link>
                        </li>
                    </div>
                </ul>
            {/* </div> */}
        </nav>
    );
};

export default Header;