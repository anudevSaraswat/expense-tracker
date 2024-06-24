import { TiDelete } from 'react-icons/ti';

export function ExpenseListItem({ expense, removeExpense }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {expense.name}
            <span>
                {expense.cost}INR
            </span>
            <div>
                <TiDelete size="1.5em" onClick={() => removeExpense(expense.id)}></TiDelete>
            </div>
        </li>
    );
}