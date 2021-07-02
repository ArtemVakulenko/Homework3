import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import rootReducer from './store';
import rootSaga from './store/rootSaga';

const saga = createSagaMiddleware();

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, compose(applyMiddleware(saga), devTools));
saga.run(rootSaga);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
        
);
