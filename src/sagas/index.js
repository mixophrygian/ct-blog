import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { entriesFetchList, entriesAddEdit, entriesDelete } from './entries';

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'ENTRIES_FETCH_LIST', entriesFetchList),
    fork(takeLatest, 'ENTRIES_ADD_EDIT', entriesAddEdit),
    fork(takeLatest, 'ENTRIES_DELETE', entriesDelete),
  ];
}
