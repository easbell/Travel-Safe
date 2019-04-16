import { setData } from '../../actions';
import { dataReducer } from '../dataReducer';

describe('dataReducer', () => {
  it('should return default state', () => {
    const initialState = [];
    expect(dataReducer(initialState, {})).toEqual(initialState);
  });

  it('should return updated state when action is passed through', () => {
    const mockVaccines = {country: 'France', rating: 2.4};
    const action = setData(mockVaccines);
    const intitialState = {};
    const expectedState = mockVaccines;

    expect(dataReducer(intitialState, action)).toEqual(expectedState);
  });
});