/* eslint-disable no-console */
import localforage from 'localforage';


// API Entries static class
export default class ApiEntries {

  // get a list of entries
  static getEntries() {
    return new Promise((resolve) => {
      let entries = {};
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

  //save the entries to storage
  static saveEntries(entries) {
    return new Promise((resolve) => {
      localforage.setItem('state', entries).then((savedEntries) => {
        resolve(savedEntries);
      });
    });
  }
}
