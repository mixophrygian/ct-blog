import { saveState, loadState } from '../localstorage';

// API Entries static class
export default class ApiEntries {

  // get a list of entries
  static getList() {
    return new Promise((resolve) => {
      let entries = [];
      entries = loadState();
      if (!entries || !entries.length) {
        entries = [];
        entries.push({
          id: 1,
          date: new Date(),
          situation: "I\'m worried about an event that occurred",
          emotionalResponse: 'This event made me feel sad and stupid',
          automaticThoughts: 'I\'m always doing stupid things, I\'ll never improve',
          cognitiveDistortions: ['allOrNothingThinking', 'overgeneralization'],
          rationalResponse: 'Everybody feels stupid sometimes, I can improve',
        });
        saveState(entries);
      }
      resolve(entries);
    }
    );
  }

  // add/edit an entry
  static addEdit(action) {
    return new Promise((resolve) => {
      let entries = [];
      entries = loadState();
      let actionType = '';
      if (!action.entry.id) {
        action.entry.id = new Date().getTime();
        entries.push(action.entry);
        actionType = 'Add';
      } else {
        const toChange = entries.find(saved => saved.id === action.entry.id);
        entries.splice(entries.indexOf(toChange), 1, action.entry);
        actionType = 'Edit';
      }
      saveState(entries);
      resolve(actionType);
    });
  }

  // delete an entry
  static delete(action) {
    return new Promise((resolve) => {
      let entries = [];
      entries = loadState();
      const toChange = entries.find(el => el.id === action.entry.id);
      entries.splice(entries.indexOf(toChange), 1);
      saveState(entries);
      resolve();
    });
  }
}
