export const loadState = () => {
  console.log('loading the state now...');
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null){
      return undefined;
    }
    const ordinaryState = JSON.parse(serializedState);
    console.log(ordinaryState);
    return ordinaryState;
  } catch (err) {
    console.log('loading state didnt work right');
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    // console.log(state);
    console.log('save state succeeded');
  } catch (err) {
    console.log(err);
  }
}