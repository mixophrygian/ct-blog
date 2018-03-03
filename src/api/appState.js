/* eslint-disable no-console */
import localforage from 'localforage';

export default class appState {

  static checkIfOnboarded() {
    return new Promise((resolve) => {
      localforage.getItem('onboarded').then((onboardState) => {
        resolve(!!onboardState);
      }).catch((err) => {
        console.log('Something went wrong while trying to get onboardstate from localforage', err);
      });
    });
  }

  static markAsOnboarded() {
    return new Promise((resolve) => {
      localforage.setItem('onboarded', true).then((onboardState) => {
        resolve(onboardState);
      }).catch((err) => {
        console.log('Something went wrong while trying to save onboardstate to localforage', err);
      });
    });
  }
}
