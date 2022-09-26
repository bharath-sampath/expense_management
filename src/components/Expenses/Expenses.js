import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";
import "./Expenses.css"
function Expenses(props) {    
const [filter, setFilter] = useState('2020');
const saveFilterHandler = (newFilter) => {
    setFilter(newFilter);
}

const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
});


     return (
        <div>
            <Card className='expenses'>
            <ExpenseFilter defFilter={filter} onFilterSelect={saveFilterHandler} />
            <ExpenseChart filteredExpenses={filteredExpenses}/>
            <ExpenseList filteredExpenseList={filteredExpenses} />
            </Card>
        </div>
    );

};

export default Expenses;