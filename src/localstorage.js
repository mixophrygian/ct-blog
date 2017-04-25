 /* eslint-disable no-console */
import localforage from 'localforage';

export const loadState = () => {
  localforage.getItem('state').then((val) => {
     return val;
  }).catch((err) => {
     console.log('Something went wrong while trying to get data from localforage', err);
  });
};

export const saveState = (state) => {
  localforage.setItem('state', state).then((val) => {
    return val;
  }).catch((err) => {
     console.log('Something went wrong while trying to save to localforage', err);
  })
};
