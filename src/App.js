import React, {useEffect, useState} from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';


let DUMMY_EXPENSES = [];
//as this is the parent component so we are not passing props here
const App = () => {

    //Array desctructing with useState - expenses is a array with setExpenses method for it in which
    //DUMMY_EXPENSES elements are copied
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    function fetchData(){
        fetch('http://localhost:8080/webApp/getExpense').then(
            Response => {
                return Response.json();
            }
        ).then(
            data => {
                console.log(data);
                setExpenses(data);
            }
        );
    }

    useEffect(() => {
        fetchData();
    }, []);

  

    const onAddExpenseHandler = (expense) => {
        //A array in which adding both array (array from up and array from child component(NewExpense))
        // const updatedExpense = [expense, ...expenses];
        // setExpenses(updatedExpense);
        console.log(expense);

        fetch('http://localhost:8080/webApp/addExpense', {
            method: 'POST',
            body: JSON.stringify(expense),
            headers: {
                'content-type' : 'application/json'
            }
        }).then(
            Response => {
                fetchData();
            }
        );
    };

    return (
        <div>
            <h2>Expense Management Tool</h2>
            <NewExpense addExpenseData={onAddExpenseHandler}/>
            <Expenses item={expenses} />
        </div>
        
    );
}

export default App;