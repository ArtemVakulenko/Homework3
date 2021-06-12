import { combineReducers } from 'redux';
import booksReducer from './books/reducer';

const rootReducer = combineReducers({ 
    books: booksReducer, //state.movies   ===>  {moviesIds: [], movies:[]}
});

export default rootReducer;
