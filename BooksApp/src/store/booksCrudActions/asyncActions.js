// import { booksGetRequest } from '../books/asyncActions';
// import { setBooksTostore } from '../books/actions';
// import { URL } from '../../helpers/constants';

// export const booksPostRequest = () => (dispatch, getState) => {
//     const body = getState().booksCrudActions.postBook;
//     fetch(URL.books, {
//         method: 'POST',
//         body: JSON.stringify(body),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     .then(() => dispatch(booksGetRequest()))
//     .then((data) => JSON.parse(data))
//     .then((data) => dispatch(setBooksTostore(data)));
// };

// export const bookDeleteRequest = (id) => (dispatch) => {
//     const body = {
//         id,
//     };
//     fetch(URL.books, {
//         method: 'DELETE',
//         body: JSON.stringify(body),
//         headers: {
//             'Content-Type': 'application/json',
//         }, 
//     })
//     .then(() => dispatch(booksGetRequest()))
//     .then((data) => JSON.parse(data))
//     .then((data) => dispatch(setBooksTostore(data)));
// };

// export const bookPutRequest = () => (dispatch, getState) => {
//     const body = getState().booksCrudActions.putBook;
//     fetch(URL.books, {
//         method: 'PUT',
//         body: JSON.stringify(body),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     .then(() => dispatch(booksGetRequest()))
//     .then((data) => JSON.parse(data))
//     .then((data) => dispatch(setBooksTostore(data)));
// };
