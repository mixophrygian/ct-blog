 /* eslint-disable no-console */
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
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
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error(err);
  }
};
