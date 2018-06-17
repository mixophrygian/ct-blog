/* eslint-disable no-console */
import { call, put, select } from "redux-saga/effects";
import ApiEntries from "../api/entries";
import Auth from "../api/Auth.js";
import db from "../api/db.js";

const auth = new Auth({});

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
  const entries = yield select(getEntries);
  yield call(ApiEntries.saveEntries, entries);
  yield call(db.saveEntryToDB, action.entry, auth);
  action.callbackSuccess(action.entry);
}

export function* entriesDelete(action) {
  yield put({
    type: "ENTRIES_DELETE_SAVE",
    entry: action.entry,
  });
  const entries = yield select(getEntries);
  yield call(db.deleteEntryFromDB, action.entry, auth);
  yield call(ApiEntries.saveEntries, entries);
}
