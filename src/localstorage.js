export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null){
      return undefined;
    }
    const ordinaryState = JSON.parse(serializedState);
    return ordinaryState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
}