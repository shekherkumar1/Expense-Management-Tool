import React, {useState} from 'react';

import './ExpenseItem.css';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    // const [newTitle,setNewTitle] = useState("");
    // const [title ,setTitle] = useState(props.title);
    
    // const changeHandler = (event) =>{
    //     setNewTitle(event.target.value);
    // }

    // const clickHandler = () => {
    //     setTitle(newTitle);
    // }
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={new Date(props.date)} />
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">${ props.amount }</div>
                {/* <input type = "text" value={newTitle} onChange={changeHandler}></input>
                <button onClick={clickHandler}>Change</button> */}
            </div>
        </Card>
    );
}

export default ExpenseItem;