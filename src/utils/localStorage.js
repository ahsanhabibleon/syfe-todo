export const loadFromLocalStorage = (state) => {
  try {
    const serializedState = localStorage.getItem(state);
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const saveInLocalStorage = (state, payload) => {
  try {
    const serializedState = JSON.stringify(payload);
    localStorage.setItem([state], serializedState);
  } catch (err) {
    console.log(err);
  }
};
