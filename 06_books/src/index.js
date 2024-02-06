import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import { BooksProvider } from './context/books';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
    <BooksProvider>
        <App />
    </BooksProvider>
);