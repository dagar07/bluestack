import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './view/Dashboard/Dashboard';
import ReactModal from 'react-modal';

function App() {
  ReactModal.setAppElement(document.getElementById('root'));
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
