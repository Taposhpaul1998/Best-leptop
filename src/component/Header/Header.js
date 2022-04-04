import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='menu-ber'>
            <Link to='/'>Home</Link>
            <Link to='/review'>Reviews</Link>
            <Link to='/deshbord'>Deshbord</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
};

export default Header;