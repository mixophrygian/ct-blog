/* eslint-disable no-console */
import localforage from 'localforage';


// API Entries static class
export default class ApiEntries {

  // get a list of entries
  static getEntries() {
    return new Promise((resolve) => {
      localforage.getItem('state').then((retrievedEntries) => {
        resolve(retrievedEntries || []);
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
