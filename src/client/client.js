// Startup point for the client side application
import React from 'react';
import reactDom from 'react-dom';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

reactDom.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root'));