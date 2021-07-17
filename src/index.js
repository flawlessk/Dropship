import React from 'react';
import ReactDOM from 'react-dom';
import "./css/Reset.css";
import App from './App';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import ProductsReducer from "./reducers/productsReducer/ProductsReducer";
import { BrowserRouter } from "react-router-dom";

const reducers = combineReducers({
  ProductsReducer
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("main_wrapper")
);
