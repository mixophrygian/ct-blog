/* eslint-disable no-console */
import localforage from "localforage";

export default class appState {
  static checkIfOnboarded() {
    return localforage
      .getItem("onboarded")
      .then(onboardState => {
        return !!onboardState;
      })
      .catch(err => {
        console.log("Something went wrong while trying to get onboardstate from localforage", err);
      });
  }

  static markAsOnboarded() {
    return localforage
      .setItem("onboarded", true)
      .then(onboardState => {
        return onboardState;
      })
      .catch(err => {
        console.log("Something went wrong while trying to get onboardstate from localforage", err);
      });
  }
}
