// index.js or index.jsx
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';

// Replace ReactDOM.render with createRoot().render
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
