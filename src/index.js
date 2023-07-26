import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculadora/calculator';
import Header from './header-proyects/header';

const rutas = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route
      path="/project"
      element={
        <div>
          <Header />
          <Calculator />
        </div>
      }
    />
  </Routes>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>{rutas}</Router>
  </React.StrictMode>
);
