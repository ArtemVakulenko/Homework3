import { booksGetRequest } from '../books/asyncActions';
import * as ACTIONS from './actions';
import { URL } from '../../helpers/constants';

export const booksPostRequest = () => (dispatch, getState) => {
    const body = getState().booksCrudActions.postBook;
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch(URL.books, options);
    // .then(() => dispatch(ACTIONS.clearFields()))
    // .then(() => dispatch(booksGetRequest()));
};

export const bookDeleteRequest = (id) => (dispatch) => {
    const body = {
        id,
    };
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch(URL.books, options);
    // .then(() => dispatch(booksGetRequest));
};

export const bookPutRequest = () => (dispatch, getState) => {
    const body = getState.booksCrudActions.postBook;
    fetch(URL.books, {
        method: 'PUT',
        body,
    });
    // .then(() => dispatch(ACTIONS.clearFields))
    // .then(() => dispatch(booksGetRequest));
};
