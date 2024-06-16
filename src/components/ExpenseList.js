import { ExpenseListItem } from "./ExpenseListItem";

export function ExpenseList({ expenses }) {

    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseListItem name={expense.name} cost={expense.cost}></ExpenseListItem>
            ))}
        </ul>
    );
}