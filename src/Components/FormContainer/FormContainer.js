import React from 'react'
import IncomeForm from '../../Components/IncomeForm/IncomeForm.js'
import ExpenseForm from '../../Components/ExpenseForm/ExpenseForm.js'
import './FormContainer.css'

const FormContainer = () => {
  return (
    <section className='formsArea col-10'>
          <IncomeForm />
          <ExpenseForm />
    </section>
  )
}

export default FormContainer
