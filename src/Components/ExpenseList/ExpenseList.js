import React, { useState, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ExpenseList.css';

const ExpenseList = () => {
    const [paid, setPaid] = useState(false);

    return (
        <section className='container col-11 expenseListContainer'>
            <h2>Expense List</h2>
            <div className='row'>
                <div className='col-12'>
                    <table className='table table-hover table-responsive{-sm|-md|}'>
                        <thead>
                            <tr>
                                <th scope='col' width="25%">Creditor</th>
                                <th scope='col'>Amt Due</th>
                                <th scope='col'>Due Date</th>
                                <th scope='col'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rent</td>
                                <td>$1000.00</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div className='status'>
                                    <div className='checkbox'>
                                    <label htmlFor='checkbox'>Paid</label>
                                        <input type='checkbox' />
                                    </div>
                                <EditIcon className="icons" />
                                        <DeleteIcon className="icons" />
                                        </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default ExpenseList;
