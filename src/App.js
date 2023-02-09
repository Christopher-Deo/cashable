// React imports
import React from 'react';
import { Route, Routes } from "react-router-dom";
//Bootstrap imports
//  CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Material UI imports

//AWS Amplify imports
//importing aws authenticator
import { withAuthenticator } from '@aws-amplify/ui-react';

// Local imports
import './App.css';
import Header from './Components/Header/Header';
import Instructions from '././Pages/Instructions';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default withAuthenticator(App);
