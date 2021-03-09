import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './routes/App';

import reducer from './reducers';

const sessionState = {
  id: sessionStorage.getItem('id'),
  name: sessionStorage.getItem('name'),
  email: sessionStorage.getItem('email'),
  img: sessionStorage.getItem('img'),
  isLogged: !!sessionStorage.getItem('isLogged'),
};

const initialState = {
  user: {
    id: sessionState.id,
    name: sessionState.name,
    email: sessionState.email,
    img: sessionState.img,
    isLogged: sessionState.isLogged,
  },
  channels: [],
  error: false,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
