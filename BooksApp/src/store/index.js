import { combineReducers } from 'redux';
import booksReducer from './books/reducer';
import booksCrudActionsReducer from './booksCrudActions/reducer';

const rootReducer = combineReducers({ 
    books: booksReducer,
    booksCrudActions: booksCrudActionsReducer,
});

export default rootReducer;
