import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img className="header-logo" src={logo} alt="logo" />
        </div>
    );
};

export default Header;