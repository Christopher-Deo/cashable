// React imports
import React from 'react';
import { Route, Routes } from "react-router-dom"
//Bootstrap imports

// Material UI imports

//AWS Amplify imports
     //importing aws authenticator
import { withAuthenticator } from '@aws-amplify/ui-react';

// Local imports
import './App.css';
import Header from './Components/Header/Header';
import IncomeForm from '././Components/IncomeForm/IncomeForm';
import Instructions from '././Pages/Instructions';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Footer from './Components/Footer/Footer';
import FormContainer from './Components/FormContainer/FormContainer';
import Recap from './Components/Recap/Recap';
import ExpenseList from './Components/ExpenseList/ExpenseList';



function App() {
  return (
    <>
      <Header />
      
      <Recap />
      <FormContainer />
      <ExpenseList />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>  
  );
}

export default withAuthenticator(App);
