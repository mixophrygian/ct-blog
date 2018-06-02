import { call, put } from "redux-saga/effects";
import appState from "../api/appState";

export function* getUserProfile() {
  const profile = yield call(appState.getUserProfile);
  yield put({
    type: "SET_USER_PROFILE",
    profile,
  });
}

export function* checkIfOnboarded() {
  const onboarded = yield call(appState.checkIfOnboarded);
  yield put({
    type: "UPDATE_ONBOARDING_STATE",
    onboarded,
  });
}

export function* markAsOnboarded() {
  const newStatus = yield call(appState.markAsOnboarded);
  yield put({
    type: "UPDATE_ONBOARDING_STATE",
    onboarded: newStatus,
  });
}
