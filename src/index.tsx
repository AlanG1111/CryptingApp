import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import App from './components/app';
import { dataReducer} from './store/reducer'
import { sagaWatcher } from './store/sagas';

const saga = createSagaMiddleware()
const store = createStore(dataReducer, applyMiddleware(thunk, saga))

export type RootState = ReturnType<typeof store.getState>

saga.run(sagaWatcher)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
