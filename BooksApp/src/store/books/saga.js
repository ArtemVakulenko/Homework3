import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_BOOKS } from './actionTypes';
import { setBooksTostore } from './actions';
import { getRequest } from '../../helpers/request';
import { URL } from '../../helpers/constants';

export function* booksGetRequest() {
  try {
    const response = yield call(getRequest, URL.books);
    const data = yield call([response, 'json']);
    yield put(setBooksTostore(data));
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export default function* booksWatcher() {
  yield takeEvery(GET_BOOKS, booksGetRequest);
}
