export const vaccineReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_VACCINES':
      return action.data;
    default:
      return state;
  }
}