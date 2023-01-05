import React, { useState, useEffect } from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
    //setting state for the form
    const [creditor, setCreditor] = useState('');
    const [amountDue, setAmountDue] = useState(0);
    const [dueDate, setDueDate] = useState('');

    //change and click handlers
    const handleCreditor = (e) => {
        e.preventDefault();
        setCreditor(e.target.value);
    }

    const handleAmountDue = (e) => {
        e.preventDefault();
        setAmountDue(e.target.value);
    }

    const handleDueDate = (e) => {
        e.preventDefault();
        setDueDate(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(creditor, amountDue, dueDate);
    }


    return (
        <section className='expenseFormContainer'>
            <h1>Expense Entry Form</h1>
            <form className='expenseForm'>
                <div className='expenseFormInputContainer'>
                    
                    <label className='expenseFormLabel'
                        htmlFor='creditorLabel'>Creditor</label>
                    <input className='creditorInput form-control'
                        type='text'
                        name='creditorInput'
                        id='creditorInput'
                        placeholder='Creditor'
                        onChange={handleCreditor} />
                    
                    <label className='expenseFormLabel'
                        htmlFor='amountDueLabel'>Amount Due</label>
                    <input className='amountDueInput form-control'
                        type='number'
                        name='amountDueInput'
                        id='amountDueInput'
                        placeholder='Amount'
                        onChange={handleAmountDue} />
                    
                    <label className='expenseFormLabel'
                    htmlFor='dueDateLabel'>Due Date</label>
                    <input className='dueDateInput form-control'
                        type='date'
                        name='dueDateInput'
                        id='dueDateInput'
                        placeholder='Due Date'
                        onChange={handleDueDate} />
                    
                    <button className='expenseSubmitBtn'
                        type='submit'
                        onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>

        </section>
    )
}

export default ExpenseForm
