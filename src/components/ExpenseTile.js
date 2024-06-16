export function ExpenseTile({ expense }) {
    return (
        <div className="alert alert-primary">
            <span>Expense : {expense}INR</span>
        </div>
    );
}