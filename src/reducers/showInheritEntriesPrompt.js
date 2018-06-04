export default function showInheritEntriesPrompt(state = initialState, action) {
  switch (action.type) {
    case "SHOW_INHERIT_ENTRIES_PROMPT":
      return true;
    case "HIDE_INHERIT_ENTRIES_PROMPT":
      return false;
    default:
      return state;
  }
}

const initialState = false;
