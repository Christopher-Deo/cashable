import React from 'react';
//bootstrap imports
//  CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Material UI imports

import ExpenseList from '../Components/ExpenseList/ExpenseList';
import FormContainer from '../Components/FormContainer/FormContainer';

const Home = () => {
  

  return (
    <>
      <main>
        <FormContainer />
        <ExpenseList />
      </main>
    </>
  );
};

export default Home;
