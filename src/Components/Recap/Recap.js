import React from 'react'
import IncomeRecap from '../../Components/IncomeRecap/IncomeRecap';
import ExpenseRecap from '../../Components/ExpenseRecap/ExpenseRecap';
import BalanceRecap from '../../Components/BalanceRecap/BalanceRecap';
import './Recap.css'


const Recap = () => {
  
  return (
    <section className='recapArea col-10'>
      <IncomeRecap />
      <ExpenseRecap />
      <BalanceRecap />
    </section>
  )
}

export default Recap
