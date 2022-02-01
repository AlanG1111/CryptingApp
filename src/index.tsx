import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import App from './components/app';
import { addDataReducer, changeDataReducer, hideInputReducer } from './store/reducer'
import { sagaWatcher } from './store/sagas';

const rootReducer = combineReducers({addDataReducer,changeDataReducer, hideInputReducer})
const saga = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(thunk, saga))

saga.run(sagaWatcher)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
