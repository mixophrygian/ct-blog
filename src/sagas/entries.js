/* eslint-disable no-console */
import { call, put, select } from "redux-saga/effects";
import ApiEntries from "../api/entries";

export const getEntries = state => state.entries;

export function* entriesFetchList() {
  try {
    const entries = yield call(ApiEntries.getEntries);
    yield put({
      type: "ENTRIES_LIST_SAVE",
      entries,
    });
  } catch (e) {
    console.log(" fetching entries failed", e);
    // TODO: handle failed fetch
    // yield put({
    //   // type: 'ENTRIES_FETCH FAILED', message: e.message});
    // })
  }
}

export function* entriesAddEdit(action) {
  const type = !action.entry.id ? "ENTRIES_ADD_SAVE" : "ENTRIES_EDIT_SAVE";
  yield put({
    type: type,
    entry: action.entry,
  });
  const entries = yield select(ApiEntries.getEntries);
  yield call(ApiEntries.saveEntries, entries);
  action.callbackSuccess(action.entry);
}

export function* entriesDelete(action) {
  yield put({
    type: "ENTRIES_DELETE_SAVE",
    entry: action.entry,
  });

  const entries = yield select(getEntries);
  yield call(ApiEntries.saveEntries, entries);
}
