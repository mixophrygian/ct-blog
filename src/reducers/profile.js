export default function profile(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_PROFILE":
      return action.profile;
    default:
      return state;
  }
}

const initialState = false;
