import { ExpenseListItem } from "./ExpenseListItem";

export function ExpenseList() {

    const expenses = [
        {
            id: 1,
            name: "Shopping",
            cost: 5000,
        },
        {
            id: 2,
            name: "Dining",
            cost: 5000,
        },
        {
            id: 3,
            name: "Fun",
            cost: 5000,
        },
    ];

    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseListItem name={expense.name} cost={expense.cost}></ExpenseListItem>
            ))}
        </ul>
    );
}