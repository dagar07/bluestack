import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './view/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
