import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Layout from './app/layouts/Layout';


import 'bootstrap/dist/css/bootstrap.min.css';
import './app/styles/common.css';

import { Provider } from 'react-redux';

import store from './app/store';

ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
</Provider>, document.getElementById('root'));
