import { setSaved, hasError } from '../actions';

export const saveCountry = (id) => {
  const option = {
    method: 'POST',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const url = 'http://localhost:3001/api/v1/data';
  console.log('in save, id:', JSON.stringify(id))
  return async (dispatch) => {
    try {
      const response = await fetch(url, option);
      if(!Response.ok) {
        throw Error(response.statusText);
      }
      dispatch(setSaved(response.body));
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}