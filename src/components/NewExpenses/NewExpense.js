import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {


    // This function is collecting data from child component ExpenseForm, this happens 
    // becoz function saveExpenseDataHandler has been passed in return with child component
    // here "expense" object has been used to collect data coming from child component (any object name can be given)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            //id: Math.random().toString()
        };

        //here name of "addExpenseData" attribute should be same as attribute passed while this component in parent JS(component)
        props.addExpenseData(expenseData);
        console.log(expenseData);
    };

    //creating another object same as expenseEnteredData to pass data to its parent which is App.js


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
        
    );
}

export default NewExpense;