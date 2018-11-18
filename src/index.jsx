import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routes';

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<AppRouter />, wrapper) : false;
