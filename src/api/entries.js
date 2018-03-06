/* eslint-disable no-console */
import localforage from 'localforage';

export default class ApiEntries {

  static getEntries() {
    return new Promise((resolve) => {
      return localforage.getItem('entries').then((retrievedEntries) => {
        resolve(retrievedEntries || []);
      }).catch((err) => {
        console.log('Something went wrong while trying to save to localforage', err);
      });
    })
  }

  static saveEntries(entries) {
    return new Promise((resolve) => {
      return localforage.setItem('entries', entries).then((savedEntries) => {
        resolve(savedEntries);
      }).catch(err => console.log('fuuuuuck', err));
    });
  }
}
