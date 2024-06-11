import { TiDelete } from 'react-icons/ti';

export function ExpenseListItem(props) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge badge-primary badge-pill mr-3">
                    Rs{props.cost}
                </span>
                <TiDelete size="1.5em"></TiDelete>
            </div>
        </li>
    );
}