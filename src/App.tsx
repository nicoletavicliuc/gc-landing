import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </>
  );
};

export default App;
