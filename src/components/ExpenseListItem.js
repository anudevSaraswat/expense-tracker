import { TiDelete } from 'react-icons/ti';

export function ExpenseListItem(props) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <span>
                {props.cost}INR
            </span>
            <div>
                <TiDelete size="1.5em"></TiDelete>
            </div>
        </li>
    );
}