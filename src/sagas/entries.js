import { call, put, select } from 'redux-saga/effects';
import ApiEntries from '../api/entries';

export const getEntries = (state) => state.entries;

export function* entriesFetchList() {
  const entries = yield call(ApiEntries.getEntries);
  yield put({
    type: 'ENTRIES_LIST_SAVE',
    entries,
  });
}

export function* entriesAddEdit(action) {
  const type = action.entry.id ? 'ENTRIES_EDIT_SAVE' : 'ENTRIES_ADD_SAVE';

  yield put({
    type: type,
    entry: action.entry,
  });
  const entries = yield select(getEntries);
  yield ApiEntries.saveEntries(entries);

  action.callbackSuccess(action.entry);
}

export function* entriesDelete(action) {
  yield put({
    type: 'ENTRIES_DELETE_SAVE',
    entry: action.entry,
  });

  const entries = yield select(getEntries);
  yield ApiEntries.saveEntries(entries);
}
