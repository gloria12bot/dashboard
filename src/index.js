import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFac1pJWnxLd0x0RWFbb116cVBMYltBNQtUQF1hS35VdExjXX9ec3RXRGBa');


// ReactDOM.render(<App />, document.getElementById('root'));




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 