/* eslint-disable no-console */
import localforage from 'localforage';


// API Entries static class
export default class ApiEntries {

  // get a list of entries
  static getList() {
    return new Promise((resolve) => {
      let entries;
      localforage.getItem('state').then((retrievedEntries) => {
        entries = retrievedEntries;
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
          localforage.setItem('state', entries).then((savedEntries) => {
            resolve(savedEntries);
          });
        } else {
          resolve(retrievedEntries);
        }
      }).catch((err) => {
        console.log('Something went wrong while trying to save to localforage', err);
      });
    })
  }

  // add/edit an entry
  static addEdit(action) {
    return new Promise((resolve) => {
      localforage.getItem('state').then((retrievedEntries) => {
        const entries = retrievedEntries;
        if (!action.entry.id) {
          action.entry.id = new Date().getTime();
          entries.push(action.entry);
          return ({entries, type: 'Add'});
        }
        const toChange = entries.find(saved => saved.id === action.entry.id);
        entries.splice(entries.indexOf(toChange), 1, action.entry);
        return ({entries, type: 'Edit'});
      }).then((data) => {
        console.log(data);
        const { entries, type } = data;
        localforage.setItem('state', entries).then(() => {
          resolve(type);
        });
      }).catch((err) => {
        console.log('Something went wrong while trying to save to localforage', err);
      });
    })
  }

  // delete an entry
  static deleteEntry(action) {
    return new Promise((resolve) => {
      let entries = [];
      localforage.getItem('state').then((retrievedEntries) => {
        entries = retrievedEntries;
        const toChange = entries.find(el => el.id === action.entry.id);
        entries.splice(entries.indexOf(toChange), 1);
        return entries;
      }).then((updatedEntries) => {
        localforage.setItem('state', updatedEntries).then(() => {
          resolve();
        });
      }).catch((err) => {
        console.log('Something went wrong while trying to save to localforage', err);
      });
    });
  }
}
