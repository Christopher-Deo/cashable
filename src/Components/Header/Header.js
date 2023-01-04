import React from 'react';
import logo from '../../logo.svg';
// import TopNav from '../../Components/MainNav/TopNav';
import Navigation from '../../Components/Navigation/Navigation'

import './Header.css';



const Header = () => {
    return (
        <header>
            <img id="logo" src={logo} alt="cashable logo" />
            <Navigation />
        </header>
    )
}

export default Header
