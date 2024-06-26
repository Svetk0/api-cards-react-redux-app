import React from 'react';
 import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store/store.js';
import { REPO_NAME } from "@constants/repo";
import App from '@containers/App/App';
import '@styles/index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={ `/${REPO_NAME}/`}>
    <Provider store={store}>
        <App />
        </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);
