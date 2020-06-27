import React, {useState} from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return(
    <>
    <GlobalProvider>
      <Header />
      <div className = "container1">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
    </>
  )
}

export default App;