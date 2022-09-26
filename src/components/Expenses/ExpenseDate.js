import './ExpenseDate.css';
function ExpenseDate(props) {
    const expMonth = props.date.toLocaleString('en-US', {month:'long'});
    const expDate = props.date.toLocaleString('en-US', {month:'2-digit'});
    const expYear = props.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{expMonth}</div>
            <div className="expense-date__year">{expYear}</div>
            <div className="expense-date__day">{expDate}</div>            
        </div>
    );
}

export default ExpenseDate;