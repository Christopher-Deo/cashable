import { React, useState, useEffect } from 'react'
import './IncomeForm.css'

const IncomeForm = () => {
    const [income, setIncome] = useState(0);
    const [incomeForm, setIncomeForm] = useState(false);

    const handleIncomeForm = () => {
        setIncomeForm(true);
        
    }


    return (
        <section className='incomeFormContainer'>
            <h1 className='mt-3'>Income Entry Form</h1>
            <form className='incomeForm'>
                <div className='incomeFormInputContainer'>
                    <label className='incomeFormLabel' htmlFor='incomeFormLabel'>Income</label>
                    <input className='incomeFormInput form-control' type='number' name='incomeFormInput' id='incomeFormInput' placeholder='Enter Your Income' />
                    <button className='incomeSubmitBtn' type='submit'>Submit</button>
                </div>

            </form>

        </section>
    )
}

export default IncomeForm
