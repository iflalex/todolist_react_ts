import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// styles
import './styles/index.scss';

// router
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
