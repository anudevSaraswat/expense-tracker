import './App.css';
import { BudgetTile } from './components/BudgetTile';
import { ExpenseTile } from './components/ExpenseTile';
import { RemainingTile } from './components/RemainingTile';
import { ExpenseList } from './components/ExpenseList';
import { AddExpenseForm } from './components/AddExpenseForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const budget = 50000;

  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState(0);
  const [remainingAmount, setRemainingAmount] = useState(budget);


  function addNewExpense(name, cost) {
    setExpenses((prev) => {
      return [...prev, { id: uuidv4(), name: name, cost: cost }];
    });
    updateExpense(cost);
    updateRemainingAmount(cost);
  }

  function removeExpense(expenseID) {
    setExpenses((prev) => {
      return prev.filter((item) => item.id !== expenseID);
    });
  }

  function updateExpense(cost) {
    setExpense((prev) => {
      return prev + Number(cost);
    });
  }

  function updateRemainingAmount(cost) {
    setRemainingAmount((prev) => {
      return prev - Number(cost);
    });
  }

  return (
    <div>
      <h1 className='mt-3'>Expense Tracker</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <BudgetTile budget={budget}></BudgetTile>
        </div>
        <div className='col-sm'>
          <ExpenseTile expense={expense}></ExpenseTile>
        </div>
        <div className='col-sm'>
          <RemainingTile remainingAmount={remainingAmount}></RemainingTile>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList expenses={expenses} removeExpense={removeExpense}></ExpenseList>
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddExpenseForm addExpense={addNewExpense}></AddExpenseForm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;