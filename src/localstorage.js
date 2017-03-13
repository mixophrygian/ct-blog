export const loadState = () => {
  console.log('load state was attempted');
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null){
      return undefined;
    }
    console.log(JSON.parse(serializedState));
    return JSON.parse(serializedState);
  } catch (err0) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    console.log('save state was set', localStorage);
  } catch (err) {
    console.log(err);
  }
}