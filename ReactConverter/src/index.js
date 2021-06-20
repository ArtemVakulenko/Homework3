import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './store/rootReducer';
import watcher from './store/moneyReducer/sagas';
import App from './components/App';

const devTools = window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const saga = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    devTools,
  ),
);

saga.run(watcher);

render(
    <Provider store={store}>
        <App/>
    </Provider>,        
    document.getElementById('root'),
        
);
