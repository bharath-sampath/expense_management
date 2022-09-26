import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) => {
    const [newExpenseFlag, setNewExpenseFlag] = useState(false);
    const expenseAddHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    const cancelExpenseAddHandler = (canExpAddFlag) => setNewExpenseFlag(canExpAddFlag);
    const setterNewExpenseFlag = () => setNewExpenseFlag(true);
    let newExpenseContent = <button onClick={setterNewExpenseFlag}>Add Expense</button>;

    if (newExpenseFlag) {
        newExpenseContent = <ExpenseForm onAddCancel={cancelExpenseAddHandler} onExpenseAdd={expenseAddHandler} />;
    }

    return (
        <div className="new-expense">
            {newExpenseContent}
        </div>
    )
}

export default NewExpense;