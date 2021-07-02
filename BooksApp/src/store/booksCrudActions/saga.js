import { takeEvery, call, put, select } from 'redux-saga/effects';
import { BOOKS_POST_REQUEST, BOOKS_PUT_REQUEST, BOOKS_DELETE_REQUEST } from './actionTypes';
import { setBooksToStore } from '../books/actions';
import { URL } from '../../helpers/constants';
import { postRequest, deleteRequest, putRequest, getRequest } from '../../helpers/request';
import { getCreateFormState, getUpdateFormState } from './selectors';
import { setFieldPost } from './actions';
import 'regenerator-runtime/runtime';

export function* booksPostRequestSaga() {
  try {
    const body = yield select(getCreateFormState);
    yield call(postRequest, URL.books, body);
    const response = yield call(getRequest, URL.books);
    const data = yield call([response, 'json']);
    yield put(setBooksToStore(data));
  } catch (e) {
    console.log(e);
  }
}

export function* booksDeleteRequestSaga({ payload }) {
  try {
    yield call(deleteRequest, URL.books, { id: payload });
    const response = yield call(getRequest, URL.books);
    const data = yield call([response, 'json']);
    yield put(setBooksToStore(data));
  } catch (e) {
    console.log(e);
  }
}

export function* booksPutRequestSaga() {
  try {
    const body = yield select(getUpdateFormState);
    yield call(putRequest, URL.books, body);
    const response = yield call(getRequest, URL.books);
    const data = yield call([response, 'json']);
    yield put(setBooksToStore(data));
    yield put(setFieldPost(true));
  } catch (e) {
    console.log(e);
  }
}

export default function* booksCrudWatcher() {
  yield takeEvery(BOOKS_POST_REQUEST, booksPostRequestSaga);
  yield takeEvery(BOOKS_PUT_REQUEST, booksPutRequestSaga);
  yield takeEvery(BOOKS_DELETE_REQUEST, booksDeleteRequestSaga);
}
