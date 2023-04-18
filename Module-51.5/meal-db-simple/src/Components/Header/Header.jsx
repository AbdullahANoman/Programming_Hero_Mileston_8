import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <a href="/home">Home</a>
                <a href="/details">Details</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;