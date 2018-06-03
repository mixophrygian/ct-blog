import { UUID } from "../utils/utils.js";

export default function entries(state = [], action) {
  switch (action.type) {
    case "ENTRIES_LIST_SAVE":
      return action.entries;

    case "ENTRIES_ADD_SAVE":
      action.entry.id = action.entry.id || UUID();
      return [action.entry, ...state];

    case "ENTRIES_EDIT_SAVE":
      return state.map(entry => (entry.id === action.entry.id ? action.entry : entry));

    case "ENTRIES_DELETE_SAVE":
      return state.filter(entry => entry.id !== action.entry.id);

    // initial state
    default:
      return state;
  }
}
