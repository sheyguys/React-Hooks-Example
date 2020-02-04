import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        You click {count} times
        </p>
        <button
          style={{
            padding: '8px 16px',
            borderRadius: 4,
            fontSize: '1.25rem'
          }}
          onClick={() => setCount(count + 1)}
        >
          Click me Pls!!!
        </button>
      </header>
    </div>
  );
}

export default App;
