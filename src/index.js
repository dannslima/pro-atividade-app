import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


ReactDom.render(
  <div className='container'>
    <App/>
  </div>,
  document.getElementById('root')
);