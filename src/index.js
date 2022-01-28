import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {dataReducer} from './store/reducer'


const store = createStore(dataReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);