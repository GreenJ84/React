import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [formAppear, setFormAppear] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setFormAppear(false);
    };

    const formOpen = () => {
        setFormAppear(true);
    };

    const formClose = () => {
        setFormAppear(false);
    };

    return (
        <div className='new-expense'>
        {!formAppear && (
            <button onClick={formOpen}>Add New Expense</button>
        )}
        {formAppear && (
            <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={formClose}
            />
        )}
        </div>
    );
};

export default NewExpense;