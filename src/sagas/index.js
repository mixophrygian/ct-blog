import { takeLatest } from "redux-saga/effects";
import { fork } from "redux-saga/effects";
import { entriesFetchList, entriesAddEdit, entriesDelete } from "./entries";
import {
  getUserProfile,
  checkIfOnboarded,
  markAsOnboarded,
  checkIfNotifiedOfSunset,
  markAsNotified,
  renewSunsetNotice,
} from "./appState";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, "ENTRIES_FETCH_LIST", entriesFetchList),
    fork(takeLatest, "ENTRIES_ADD_EDIT", entriesAddEdit),
    fork(takeLatest, "ENTRIES_DELETE", entriesDelete),
    fork(takeLatest, "CHECK_IF_ONBOARDED", checkIfOnboarded),
    fork(takeLatest, "MARK_AS_ONBOARDED", markAsOnboarded),
    fork(takeLatest, "CHECK_IF_NOTIFIED_OF_SUNSET", checkIfNotifiedOfSunset),
    fork(takeLatest, "SHOWN_SUNSET", markAsNotified),
    fork(takeLatest, "RENEW_SUNSET_NOTICE", renewSunsetNotice),
    fork(takeLatest, "GET_USER_PROFILE", getUserProfile),
  ];
}
