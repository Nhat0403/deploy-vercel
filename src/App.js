import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';

function App() {
  const [state, setState] = useState([]);
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
    // const makeAPICall = async() => {
    //   const response = await fetch(baseURL + 'home', {
    //     mode: 'cors',
    //   });
    //   const resolve = await response.json();
    //   setState(resolve.message);
    //   console.log(resolve);
    // };
    // makeAPICall();
    const params = {
      email: 'admin@email.com',
      password: 12345
    };
    const query = '?' + queryString.stringify(params);
    const makeAPICall = async() => {
      const response = await fetch(baseURL + 'users/counselor/login' + query, {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'include'
        }
      });
      const resolve = await response.json();
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
