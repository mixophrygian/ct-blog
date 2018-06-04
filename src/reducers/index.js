import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import entries from "./entries";
import onboarded from "./appState";
import profile from "./profile";
import showInheritEntriesPrompt from "./showInheritEntriesPrompt";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer.plugin({
    entryEdit: (state, action) => {
      // reset form (wipe state) when navigating away from the User edit page
      switch (action.type) {
        case "@@router/LOCATION_CHANGE":
          return {};
        default:
          return state;
      }
    },
  }),
  entries,
  onboarded,
  showInheritEntriesPrompt,
  profile,
});
