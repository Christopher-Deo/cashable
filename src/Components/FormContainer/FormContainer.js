import React, { useState } from 'react';
//bootstrap imports
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormContainer.css';
import IncomeForm from '../IncomeForm/IncomeForm';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const FormContainer = () => {

  return (
    <>
      <section className='formContainer'>
        <IncomeForm />
        <ExpenseForm />
      </section>
    </>
  );
};

export default FormContainer;
