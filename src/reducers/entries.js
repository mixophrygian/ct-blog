// entries reducer
export default function entries(state = {}, action) {
  switch (action.type) {
    case 'ENTRIES_LIST_SAVE':
      return action.entries;
      break;

    case 'ENTRIES_ADD_SAVE':
      action.entry.id = action.entry.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, action.entry];
      break;

    case 'ENTRIES_EDIT_SAVE':
      return state.map(entry => 
        entry.id === action.entry.id ? action.entry : entry
      );
      break;

    case 'ENTRIES_DELETE_SAVE':
      return state.filter(entry =>
        entry.id !== action.entry_id
      );
      break;

    // initial state
    default:
      return state;
  }
}