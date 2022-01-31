import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { dataReducer } from './store/reducer'
import { sagaWatcher } from './store/sagas';

const saga = createSagaMiddleware()

const store = createStore(dataReducer, applyMiddleware(thunk, saga))

saga.run(sagaWatcher)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);