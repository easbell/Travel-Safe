import { setVaccines } from '../../actions';
import { vaccineReducer } from '../vaccineReducer';

describe('vaccineReducer', () => {
  it('should return default state', () => {
    const initialState = {};
    expect(vaccineReducer(initialState, {})).toEqual(initialState);
  });

  it('should return updated state when action is passed through', () => {
    const mockSafety = {country: 'France', rating: 2.4};
    const action = setVaccines(mockSafety);
    const intitialState = {};
    const expectedState = mockSafety;

    expect(vaccineReducer(intitialState, action)).toEqual(expectedState);
  });
});