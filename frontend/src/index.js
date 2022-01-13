import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


const rootElement = document.getElementById("root");
ReactDOM.render(
  
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();