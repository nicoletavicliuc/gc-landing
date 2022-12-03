import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';
import Home from './components/home/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
      </BrowserRouter>
    </>
  );
};

export default App;
