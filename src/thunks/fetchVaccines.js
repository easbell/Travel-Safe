import { setVaccines, hasError } from '../actions';

export const fetchVaccines = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/vaccines');
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(setVaccines(data));
    } catch(error) {
      dispatch(hasError(error.message));
    }
  }
}