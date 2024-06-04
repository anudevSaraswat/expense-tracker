import './App.css';
import { BudgetTile } from './components/BudgetTile';
import { ExpenseTile } from './components/ExpenseTile';
import { RemainingTile } from './components/RemainingTile';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <h1 className='mt-3'>Expense Tracker</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <BudgetTile></BudgetTile>
        </div>
        <div className='col-sm'>
          <ExpenseTile></ExpenseTile>
        </div>
        <div className='col-sm'>
          <RemainingTile></RemainingTile>
        </div>
      </div>
    </div>
  );
}

export default App;