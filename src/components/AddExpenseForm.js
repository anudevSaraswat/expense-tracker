import { useState } from "react";

export function AddExpenseForm({ addExpense }) {

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    return (
        <div>
            <form>
                <div className="row">
                    <div className="col-sm">
                        <label for="name">Name</label>
                        <input required="required"
                            type="text"
                            className="form-control"
                            id="name"
                            onChange={(e) => { setName(e.target.value) }}>
                        </input>
                    </div>
                    <div className="col-sm">
                        <label for="cost">Cost</label>
                        <input required="required"
                            type="text"
                            className="form-control"
                            id="cost"
                            onChange={(e) => { setCost(e.target.value) }}>
                        </input>
                    </div>
                </div>
                {/* <div className="row">
                <div className="col-sm">
                    <button className="btn btn-primary mt-3" onClick={() => addExpense(name, cost)}>
                        Save
                    </button>
                </div>
            </div> */}
            </form>
            <button className="btn btn-primary mt-3" onClick={() => addExpense(name, cost)}>
                Save
            </button>
        </div>
    );
}