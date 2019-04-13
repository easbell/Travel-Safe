import { hasError } from '../../actions';
import { errorReducer } from '../errorReducer';

describe('errorReducer', () => {
  it('should return default state', () => {
    const initialState = '';
    expect(errorReducer(undefined, {})).toBe(initialState);
  });

  it('should return updated state when action is passed through', () => {
    const action = hasError('message');
    const expectedState = 'message';

    expect(errorReducer(undefined, action)).toBe(expectedState);
  });
});