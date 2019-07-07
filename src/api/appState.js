/* eslint-disable no-console */
import localforage from "localforage";

export default class appState {
  static getUserProfile() {
    return localforage
      .getItem("profile")
      .then(profile => profile)
      .catch(e => console.log("Something went wrong getting profile from localforage", e));
  }

  static setUserProfile() {
    return localforage
      .setItem("profile")
      .then(profile => profile)
      .catch(e => console.log("Something went wrong saving profile to localstorage", e));
  }

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

  static checkIfNotifiedOfSunset() {
    return localforage
      .getItem("notifiedOfSunset")
      .then(notifiedState => {
        return !!notifiedState;
      })
      .catch(err => {
        console.log(
          "Something went wrong while trying to get notified-of-sunset state from localforage",
          err
        );
      });
  }

  static markAsOnboarded() {
    return localforage
      .setItem("onboarded", true)
      .then(onboardState => {
        return onboardState;
      })
      .catch(err => {
        console.log("Something went wrong while trying to set onboardstate from localforage", err);
      });
  }

  static markAsNotified() {
    return localforage
      .setItem("notifiedOfSunset", true)
      .then(notifiedState => {
        return notifiedState;
      })
      .catch(err => {
        console.log(
          "Something went wrong while trying to set notified of sunset from localforage",
          err
        );
      });
  }
  static renewSunsetNotice() {
    return localforage
      .setItem("notifiedOfSunset", false)
      .then(notifiedState => {
        return notifiedState;
      })
      .catch(err => {
        console.log(
          "Something went wrong while trying to reset notified of sunset from localforage",
          err
        );
      });
  }
}
