import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const randomCat = () => axios.get('https://aws.random.cat/meow');

const App = () => {
  const [count, setCount] = useState(0);
  const [cat, setCat] = useState({})

  useEffect(() => {
    randomCat().then(response => {
      setCat(response.data)
    })
  });

  // ใส่ log เพื่อดูว่ามัน render ยังไง
  console.log('render >>>')
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

        <p>
          <img src={cat.file} alt="Cat" width="312px" />
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
