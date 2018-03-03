import { call, put } from 'redux-saga/effects';
import appState from '../api/appState';

export function* checkIfOnboarded() {
  const onboarded = yield call(appState.checkIfOnboarded);
  yield put({
    type: 'UPDATE_ONBOARDING_STATE',
    onboarded,
  });
}

export function* markAsOnboarded() {
  const newStatus = yield call(appState.markAsOnboarded);
  yield put({
    type: 'UPDATE_ONBOARDING_STATE',
    onboarded: newStatus,
  });
}
