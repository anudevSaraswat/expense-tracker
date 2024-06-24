import { useState } from "react";

export function AddExpenseForm({ addExpense }) {

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    return (
        <div>
            <form id="expensive" onSubmit={(e) => {
                e.preventDefault();
                addExpense(name, cost);
                setCost("");
                setName("");
            }}>
                <div className="row">
                    <div className="col-sm">
                        <label for="name">Name</label>
                        <input required="required"
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}>
                        </input>
                    </div>
                    <div className="col-sm">
                        <label for="cost">Cost</label>
                        <input required="required"
                            type="text"
                            className="form-control"
                            id="cost"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}>
                        </input>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <button className="btn btn-primary mt-3">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}