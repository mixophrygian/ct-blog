 /* eslint-disable no-console */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    /*
    localforage.getItem('state').then((val) => {
       console.log(val, 'hi from localforage');
       return val;
    }).catch((err) => {
       console.log(err, 'err from localforage');
    });
    */
    if (serializedState === null) {
      console.log(serializedState);
      console.error('something went wrong with serializing the local storage.  Private browser?');
      return;
    }
    const ordinaryState = JSON.parse(serializedState);
    return ordinaryState;
  } catch (err) {
    console.error(err);
    return;
  }
};

export const saveState = (state) => {
  try {
    /*
    localforage.setItem('state', state).then((val) => {
      console.log(val, 'hi localforage set');
    }).catch((err) => {
       console.log(err, 'err localforage set');
    })
    */
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(err);
  }
};
