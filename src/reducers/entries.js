// entries reducer
export default function entries(state = {}, action) {
  switch (action.type) {
    case 'ENTRIES_LIST_SAVE':
      return action.entries;

    case 'ENTRIES_ADD_SAVE':
      const entry = action.entry;
      console.log('yes, add save');
      entry.id = entry.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return [...state, entry];

    case 'ENTRIES_EDIT_SAVE':
    console.log('edit save');
      return state.map(entry =>
        Number(entry.id) === Number(action.entry.id) ? {...action.entry} : entry
      );
      break;

    case 'ENTRIES_DELETE_SAVE':
      return state.filter(entry =>
        Number(entry.id) !== Number(action.entry_id)
      );

    // initial state
    default:
      return state;
  }
}