import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';

function App() {
  const [state, setState] = useState([]);
  const [products, setProducts] = useState([]);
  const baseURL = 'https://njs-asm-03-be.vercel.app/'
  const axiosClient = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    paramsSerializer: {
      indexes: null
    }
  });
  const UserAPI = {
    postLogin: (query) => {
      const url = 'users/counselor/login' + query;
      return axiosClient.post(url);
    }
  };
  useEffect(() => {
    const params = {
      email: 'admin@email.com',
      password: 12345
    };
    const query = '?' + queryString.stringify(params);
    const makeAPICall = async() => {
      const response = await fetch(baseURL + 'users/counselor/login' + query, {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'true'
        }
      });
      const resolve = await response.json();
      setState(resolve.token);
      console.log(response);
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
