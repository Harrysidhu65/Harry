import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18 and above
import './index.css';
import App from './App';

// Make sure the target container exists in your HTML
const rootElement = document.getElementById('root');

// Ensure the element exists before mounting
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // Create root for React 18+
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Target container is not found in the DOM.');
}
