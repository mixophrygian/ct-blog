import { call, put } from 'redux-saga/effects';
import ApiEntries from '../api/entries';

// fetch the entry list
export function* entriesFetchList() {
  // call the api to get the entries list
  const entries = yield call(ApiEntries.getList);
  // save the entries in state
  yield put({
    type: 'ENTRIES_LIST_SAVE',
    entries,
  });
}

// add/edit a entry
export function* entriesAddEdit(action) {
  // call the api to add/edit the entry
  const type = yield call(ApiEntries.addEdit, action);
  // return action.callbackError("Some error");   // show an error when the API fails

  // update the state by adding/editing the entry
  yield put({
    type: type === 'Edit' ? 'ENTRIES_EDIT_SAVE' : 'ENTRIES_ADD_SAVE',
    entry: action.entry,
  });

    // success
  action.callbackSuccess(action.entry);
}

// delete a entry
export function* entriesDelete(action) {
  // call the api to delete the entry
  yield call(ApiEntries.delete, action);

  // update the state by removing the entry
  yield put({
    type: 'ENTRIES_DELETE_SAVE',
    entry: action.entry,
  });
}
