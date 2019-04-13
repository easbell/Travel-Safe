import { setSafety } from '../../actions';
import { safetyReducer } from '../safetyReducer';

describe('safetyReducer', () => {
  it('should return default state', () => {
    const initialState = {};
    expect(safetyReducer(initialState, {})).toEqual(initialState);
  });

  it('should return updated state when action is passed through', () => {
    const mockSafety = {country: 'France', rating: 2.4};
    const action = setSafety(mockSafety);
    const intitialState = {};
    const expectedState = mockSafety;

    expect(safetyReducer(intitialState, action)).toEqual(expectedState);
  });
});