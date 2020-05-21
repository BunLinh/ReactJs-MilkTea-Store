import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import App from './App';
import * as serviceWorker from './serviceWorker';
import authReducer from './store/reducers/auth';
import burgerBuidlerReducer from './store/reducers/burger';
import orderReducer from './store/reducers/order';
import profileReducer from './store/reducers/profile';

import './index.css';
import { watchAuth, watchBurger, watchOrder, watchProfile } from './store/sagas';

const devConfig =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null;
const composeEnhancers = devConfig || compose;
const rootReducer = combineReducers({
  auth: authReducer,
  burgerBuidler: burgerBuidlerReducer,
  order : orderReducer,
  profile : profileReducer,
})


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBurger);
sagaMiddleware.run(watchOrder);
sagaMiddleware.run(watchProfile);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
