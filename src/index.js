import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Calculator from './components/calculadora/calculator';
import Header from './header-proyects/header';

const Root = () => (
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/project" component={() => (
        <div>
          <Header /> 
          <Calculator />
        </div>
      )} />
    </Router>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
