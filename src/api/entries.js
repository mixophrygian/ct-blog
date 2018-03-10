/* eslint-disable no-console */
import localforage from 'localforage';

export default class ApiEntries {

  static getEntries() {
    return localforage.getItem('entries').then((retrievedEntries) => {
      return retrievedEntries || [];
    }).catch((err) => {
      console.log('Something went wrong while trying to get data from local storage:', err);
    });
  }

  static saveEntries(entries) {
    return localforage.setItem('entries', entries).then((savedEntries) => {
      return savedEntries;
    }).catch(err => console.log('Something when wrong while trying to save to local storage', err));
  }
}
