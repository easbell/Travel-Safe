import { setSafety, hasError } from '../actions';
import { cleanSafety } from '../helpers/cleanSafety';

export const fetchSafety = () => {
  return async (dispatch) => {
    try {
      console.log('in safety')
      const response = await fetch('http://localhost:3001/api/v1/safety');
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const cleanedData = cleanSafety(data);
      dispatch(setSafety(cleanedData));
    } catch(error) {
      dispatch(hasError(error.message));
    }
  }
}