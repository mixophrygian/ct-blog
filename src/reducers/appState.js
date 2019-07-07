export function onboarded(state = initialOnboardedState, action) {
  switch (action.type) {
    case "UPDATE_ONBOARDING_STATE":
      return action.onboarded;
    default:
      return state;
  }
}

export function notifiedOfSunset(state = initialNotifiedState, action) {
  switch (action.type) {
    case "UPDATE_NOTIFIED_OF_SUNSET_STATE":
      return action.notifiedOfSunset;
    case "RENEW_SUNSET_NOTICE":
      return notifiedOfSunset;
    default:
      return state;
  }
}

const initialOnboardedState = false;

const initialNotifiedState = false;
