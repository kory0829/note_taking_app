import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import ErrorBoundary from './ErrorBoundarie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
</React.StrictMode>);
