import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './app/components/App';


import 'bootstrap/dist/css/bootstrap.min.css';
import './app/styles/common.css';

ReactDOM.render(<BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
