export default function appState(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_ONBOARDING_STATE":
      return action.onboarded;
    default:
      return state;
  }
}

const initialState = {
  onboarded: true,
};
