import { all, fork } from '@redux-saga/core/effects';
import booksWatcher from './books/saga';
import booksCrudWatcher from './booksCrudActions/saga';

const sagas = [
  booksWatcher,
  booksCrudWatcher,
];

export default function* rootSaga() {
  yield all(sagas.map(fork));
}
