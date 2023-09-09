import React from 'react';
import logo from '../assets/logo.svg'
import '../styles/App.css'
import Header from './header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Body'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div id='Everything' >Here</div>
        </div>
    </div>
  );
}

export default App;
