// API Entries static class
export default class ApiEntries {
  // get a list of entries
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        // build some dummy entries list
        let entries = [];
        for (let x = 1; x <= 5; x++) {
          entries.push({
            id: x,
            title: 'Johny ' + x,
            job: 'Employee ' + x,
          });
        }
        resolve(entries);
      }, 1000);
    });
  }

  // add/edit an entry
  static addEdit() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  }

  // delete an entry
  static delete() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 500);
    });
  }
}
