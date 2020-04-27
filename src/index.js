import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Context';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
