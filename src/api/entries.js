import { saveState, loadState } from "../localstorage"

// API Entries static class
export default class ApiEntries {
  
  // get a list of entries
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        let entries = [];
        entries = loadState();
        if(!entries || !entries.length) {
          for (let x = 1; x <= 5; x++) {
            entries.push({
              id: x,
              date: new Date(),
              entryname: 'Johny ' + x,
              job: 'Employee ' + x,
            });
          }
          saveState(entries);
        }
        resolve(entries);
      }, 200);
    });
  }

  // add/edit an entry
  static addEdit(action) {
    return new Promise(resolve => {
      setTimeout(() => {
        let entries = [];
        entries = loadState();
        let actionType = '';
        if(!action.entry.id){
          action.entry.id = new Date().getTime();
          entries.push(action.entry);
          actionType = 'Add';
        } else {
          var toChange = entries.find((saved) => {return saved.id === action.entry.id});
          entries.splice(entries.indexOf(toChange), 1, action.entry);
          actionType = 'Edit';
        }
        saveState(entries);
        resolve(actionType);
      }, 200);
    });
  }

  // delete an entry
  static delete(action) {
    return new Promise(resolve => {
      setTimeout(() => {
        let entries = [];
        entries = loadState();  
        var toChange = entries.find((el) => el.id === action.entry_id);
        entries.splice(entries.indexOf(toChange), 1);
        saveState(entries);
        resolve();
      }, 200);
    });
  }
}
