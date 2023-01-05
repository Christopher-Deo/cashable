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
import IncomeForm from '././Components/IncomeForm/IncomeForm';
// import Instructions from '././Pages/Instructions';
// import Home from './Pages/Home';
// import Dashboard from './Pages/Dashboard';
// import Profile from './Pages/Profile';
import Footer from './Components/Footer/Footer';
import FormContainer from './Components/FormContainer/FormContainer';
import Recap from './Components/Recap/Recap';



function App() {
  return (
    <div className="App">
      <Header />
      <Recap />
      <FormContainer />
      <Footer />
    </div>    
  );
}

export default withAuthenticator(App);
