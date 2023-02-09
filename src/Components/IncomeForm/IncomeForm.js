import { React, useState, useEffect } from 'react';
//bootstrap imports
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './IncomeForm.css';



const IncomeForm = () => {
    const [income, setIncome] = useState([]);



    return (
        <section className='incomeFormContainer'>
            <h1 className='mt-3'>Income Entry Form</h1>
            <Form className='incomeForm'>
                <Form.Group className="mb-3" controlId="incomeInput">
                    <Form.Label>Income</Form.Label>
                    <Form.Control type="number" placeholder="Enter Income" />
                </Form.Group>
                <Button variant="primary" type="button">Add Income</Button>
            </Form>

        </section>
    );
};

export default IncomeForm;
