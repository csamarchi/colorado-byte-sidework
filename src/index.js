import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import ScrollToTop from './Components/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
import { env } from './config';

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App env={env} />
    </ScrollToTop>
  </Router>, document.getElementById('root'));
registerServiceWorker();
