import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {
            props.item.map( //this props.item is coming from App.js parent component
                expense => ( 
                    <ExpenseItem 
                    key = {expense.id}
                    title = { expense.title }
                    date = { expense.date }
                    amount = { expense.amount } />

                )
            )
        }
        </Card>
    );

}

export default Expenses;