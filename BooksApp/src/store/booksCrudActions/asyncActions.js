import { booksGetRequest } from '../books/asyncActions';
import * as ACTIONS from './actions';
import { setBooksTostore } from '../books/actions';
import { URL } from '../../helpers/constants';

export const booksPostRequest = () => (dispatch, getState) => {
    const body = getState().booksCrudActions.postBook;
    fetch(URL.books, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    // .then(() => dispatch(booksGetRequest()))
    // .then((data) => dispatch(setBooksTostore(data)));
};

export const bookDeleteRequest = (id) => (dispatch) => {
    const body = {
        id,
    };
    fetch(URL.books, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }, 
    });
};

export const bookPutRequest = () => (dispatch, getState) => {
    const body = getState.booksCrudActions.postBook;
    fetch(URL.books, {
        method: 'PUT',
        body,
    });
};
