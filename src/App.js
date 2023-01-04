// React imports
import React from 'react';
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
//Bootstrap imports

// Material UI imports

//AWS Amplify imports
     //importing aws authenticator
import { withAuthenticator } from '@aws-amplify/ui-react';

// Local imports
import './App.css';
import Header from './Components/Header/Header';
// import Instructions from '././Pages/Instructions';
// import Home from './Pages/Home';
// import Dashboard from './Pages/Dashboard';
// import Profile from './Pages/Profile';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      
      <Footer />
    </div>    
  );
}

export default withAuthenticator(App);
