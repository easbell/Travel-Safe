export const saveReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_SAVED':
      return action.id;
    default:
      return state;
  }
}