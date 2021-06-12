import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './store';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, compose(applyMiddleware(thunk), devTools));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'),
        
);
