import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'

const ExpenseList = (props) => {

let expenseListContent = <h2 className='expenses-list__fallback'>No expenses found!</h2>;

if (props.filteredExpenseList.length > 0)
{
    expenseListContent = props.filteredExpenseList.map((expense) => (
        <ExpenseItem 
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
        />
    ));
};

return (
    <div className='expenses-list'>
        {expenseListContent}
    </div>
    );
}

export default ExpenseList