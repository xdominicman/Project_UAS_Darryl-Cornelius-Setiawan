import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dist/css/main.css';
import Scroll from './componen/Scrollx.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <scrollX/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
