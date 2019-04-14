import { setData, hasError } from '../actions';

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/data');
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      dispatch(setData(data[0]));
    } catch(error) {
      dispatch(hasError(error.message));
    }
  }
}