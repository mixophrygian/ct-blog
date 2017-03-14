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
              title: 'Johny ' + x,
              job: 'Employee ' + x,
            });
          }
        }
        saveState(entries);
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
          action.id = new Date().getUTCMilliseconds();
          entries.push(action.entry);
        } else {
          var toChange = entries.find((saved) => {return saved === action});
          entries.splice(entries.indexOf(toChange), 1);
          entries.push(action.entry);
        }
        saveState(entries);
        resolve();
      }, 100);
    });
  }

  // delete an entry
  static delete(action) {
    return new Promise(resolve => {
      setTimeout(() => {
        let entries = [];
        entries = loadState();  
        var toChange = entries.find((saved) => {return saved === action});
        entries.splice(entries.indexOf(toChange), 1);
        saveState(entries);
        resolve();
      }, 500);
    });
  }
}
