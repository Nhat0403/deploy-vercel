import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    const makeAPICall = async() => {
      const response = await fetch('https://njs-asm-03-be.vercel.app/home', {
        mode: 'cors',
      });
      const resolve = await response.json();
      setState(resolve.message);
      console.log(resolve);
    };
    makeAPICall();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {state}
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
