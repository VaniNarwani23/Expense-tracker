import './App.css';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransactions from './components/AddTransactions';
import{  GlobalProvider}  from './context/GlobalState';



function App() {
  return (
    <GlobalProvider>
      
      <Header/>
      <div className='container'>
        
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransactions/>
        
      </div>
    </GlobalProvider>
  );
}

export default App;
