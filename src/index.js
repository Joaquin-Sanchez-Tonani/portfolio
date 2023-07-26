import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Calculator from './components/calculadora/calculator';
import Header from './header-proyects/header';

const rutas = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/project',
    element:  (
    <div>
      <Header /> 
      <Calculator />
    </div>)
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rutas}></RouterProvider>
  </React.StrictMode>
);