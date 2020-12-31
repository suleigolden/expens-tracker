import './App.css';
import {Header} from './component/Header';
import {Balance} from './component/Balance';
import {IncomeExpenses} from './component/IncomeExpenses';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;
