import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='menu-ber'>
            <Link to='/'>Home</Link>
            <Link to='/review'>Review</Link>
            <Link to='/leaderbord'>Deshbord</Link>
            <Link to='/about'>About</Link>
        </nav>
    );
};

export default Header;