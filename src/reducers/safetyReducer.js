export const safetyReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_SAFETY':
      return action.data;
    default:
      return state;
  }
}