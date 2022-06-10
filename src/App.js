import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { NewPeople } from './features/addPeople/NewPeople';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        {/* <NewPeople /> */}
      </header>
    </div>
  );
}

export default App;
