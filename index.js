import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './App';
import './style.scss';
import rootReducer from './src/system/rootReducer';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

render(<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>, document.getElementById('root'));
