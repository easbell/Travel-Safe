import { setVaccines } from '../../actions';
import { vaccineReducer } from '../dataReducer';

describe('vaccineReducer', () => {
  it('should return default state', () => {
    const initialState = {};
    expect(vaccineReducer(initialState, {})).toEqual(initialState);
  });

  it('should return updated state when action is passed through', () => {
    const mockVaccines = {country: 'France', rating: 2.4};
    const action = setVaccines(mockVaccines);
    const intitialState = {};
    const expectedState = mockVaccines;

    expect(vaccineReducer(intitialState, action)).toEqual(expectedState);
  });
});