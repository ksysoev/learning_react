import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.css';


import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);