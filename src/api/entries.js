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
          console.log('load state didnt work');
          for (let x = 1; x <= 5; x++) {
            entries.push({
              id: x,
              date: new Date(),
              entryname: 'Johny ' + x,
              job: 'Employee ' + x,
            });
          }
          console.log('saving new entries');
          saveState(entries);
        }
        resolve(entries);
      }, 0);
    });
  }

  // add/edit an entry
  static addEdit(action) {
    return new Promise(resolve => {
      setTimeout(() => {
        let entries = [];
        entries = loadState();
        if(!action.entry.id){
          console.log('new entry');
          action.entry.id = new Date();
          entries.push(action.entry);
        } else {
          console.log('edited entry', action);
          var toChange = entries.find((saved) => {return saved.id === action.entry.id});
          entries.splice(entries.indexOf(toChange), 1, action.entry);
        }
        console.log('add/edit saved entries');
        saveState(entries);
        resolve();
      }, 0);
    });
  }

  // delete an entry
  static delete(action) {
    return new Promise(resolve => {
      setTimeout(() => {
        let entries = [];
        entries = loadState();  
        var toChange = entries.find((saved) => {return saved === action.entry});
        entries.splice(entries.indexOf(toChange), 1);
        saveState(entries);
        resolve();
      }, 100);
    });
  }
}
