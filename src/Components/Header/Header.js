import React from 'react';
import logo from '../../logo.svg';
// import TopNav from '../../Components/MainNav/TopNav';
// import Navigation from '../../Components/Navigation/Navigation'
import MainMenu from '../../Components/Menu/Menu';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Header = () => {
    return (
        <header>
            <img id="logo" src={logo} alt="cashable logo" />
            {/* <Navigation /> */}
            <MainMenu />
        </header>
    )
}

export default Header
