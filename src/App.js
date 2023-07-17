// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './home';
import BuyerPage from './buyer/buyer';
import SellerPage from './seller/seller';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
      <Routes>
        <Route path="/buyer" element={<BuyerPage />}></Route>
        <Route path="/seller" element={<SellerPage />}></Route>
      </Routes>
    </BrowserRouter>
    
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
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
