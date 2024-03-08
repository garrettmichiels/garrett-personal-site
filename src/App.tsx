import React from 'react';
import logo from './logo.svg';
import './App.css';
import { moveActiveBar } from './navbar/nav.js';

function App() {
  document.addEventListener('DOMContentLoaded', moveActiveBar);
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{"fontFamily" : "RobotoCondensed-Black", "fontSize" : "150px"}}>Garrett Michiels</h1>
  
      </header>
    <body>
      <nav className="navigation">
            <ul className="nav-list">
              <li className="active"><a onClick={moveActiveBar} href="#Home">Home</a></li>
              <li className=""><a onClick={moveActiveBar} href="#education">Education</a></li>
              <li className=""><a onClick={moveActiveBar} href="#experience">Experience</a></li>
              <li className=""><a onClick={moveActiveBar} href="#projects">Projects</a></li>
              <div className="active-bar"></div>
            </ul>
        </nav>
        <script src="./navbar/nav.js"></script>
    </body>
    </div>
  );
}

export default App;
