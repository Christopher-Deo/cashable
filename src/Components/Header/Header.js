import React from 'react';
//Bootstrap imports
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from '../../logo.svg';
import './Header.css';



const Header = () => {
    return (
        <header>
            <img id="logo" src={logo} alt="cashable logo" />
            
           
        </header>
    )
}

export default Header
