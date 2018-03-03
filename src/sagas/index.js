import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { entriesFetchList, entriesAddEdit, entriesDelete } from './entries';
import { checkIfOnboarded, markAsOnboarded } from './appState';

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'ENTRIES_FETCH_LIST', entriesFetchList),
    fork(takeLatest, 'ENTRIES_ADD_EDIT', entriesAddEdit),
    fork(takeLatest, 'ENTRIES_DELETE', entriesDelete),
    fork(takeLatest, 'CHECK_IF_ONBOARDED', checkIfOnboarded),
    fork(takeLatest, 'MARK_AS_ONBOARDED', markAsOnboarded),
  ];
}
