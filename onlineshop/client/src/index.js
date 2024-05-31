import React, { createContext } from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import UserStore from './store/UserStore';
import ItemStore from './store/ItemStore';
import 'bootstrap/dist/css/bootstrap.min.css'
//import { REACT_APP_API_URL } from '../utils/consts';

export const Context = createContext(null)

createRoot(document.getElementById('root')).render(
  <Context.Provider value={{
    user: new UserStore(),
    item: new ItemStore(),
  }}>
    <App />
  </Context.Provider>
);

