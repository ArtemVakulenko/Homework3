import * as ACTIONS from './actions';
import { URL } from '../../helpers/constants';

export const booksGetRequest = () => (dispatch) => {
    fetch(URL.books)
    .then((data) => data.json())
    .then((data) => {
        dispatch(ACTIONS.setBooksTostore(data));
    });
};
