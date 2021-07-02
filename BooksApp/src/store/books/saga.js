import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_BOOKS } from './actionTypes';
import { setBooksToStore } from './actions';
import { URL } from '../../helpers/constants';
import 'regenerator-runtime/runtime';

export function* booksGetRequest() {
  try {
    const response = yield call(fetch, URL.books);
    const data = yield call([response, 'json']);
    yield put(setBooksToStore(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* booksWatcher() {
  yield takeEvery(GET_BOOKS, booksGetRequest);
}
