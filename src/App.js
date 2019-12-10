import React from 'react';
import NavBAr from './components/navbar';
import Counters from './components/counters';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <NavBAr/>
      <main className="container">
    <Counters/>
      </main>
    </React.Fragment>
  );
}

export default App;
