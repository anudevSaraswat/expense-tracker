import { ExpenseListItem } from "./ExpenseListItem";

export function ExpenseList({ expenses, removeExpense }) {

    return (
        <ul className="list-group">
            {expenses.map((exp) => {
                return (<ExpenseListItem expense={exp} removeExpense={removeExpense}></ExpenseListItem>)
            }
            )}
        </ul>
    );
}