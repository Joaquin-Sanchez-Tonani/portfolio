import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar desde react-dom/client
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Calculator from './components/calculadora/calculator';
import Header from './header-proyects/header';
import Converter from './components/calculadora/converter';
const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project" element={(
        <div>
          <Header title="Calculator"/> 
          <Calculator />
        </div>
      )} />
      <Route path="/converter" element={(
        <div>
          <Header title="Converter" /> 
          <Converter />
        </div>
      )} />
    </Routes>
  </Router>
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Root />);
