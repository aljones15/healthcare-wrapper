import React from 'react';
import ReactDOM from 'react-dom';

const wrapper = document.getElementById('app');
const Wrapper = () => (<div>WRAPPER</div>);
wrapper ? ReactDOM.render(<Wrapper />, wrapper) : false;
