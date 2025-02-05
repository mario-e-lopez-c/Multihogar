import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PopUpProvider } from './Context/PopUpContex';

function App() {
  return (
    // <PopUpProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        </BrowserRouter>
    // </PopUpProvider>
  
          // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React - Maria Alejandra
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
