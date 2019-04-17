import * as actions from './index';

describe('actions', () => {
  describe('setData', () => {
    it('should return a type of SET_DATA with the data array', () => {
      const mockData = [
        { id: '1', country: 'France' },
        { id: '2', country: 'USA' },
        { id: '3', country: 'Mexico' },
      ];
      const expected = {
        type: 'SET_DATA',
        data: mockData
      }
      const result = actions.setData(mockData);
      expect(result).toEqual(expected);
    });
  });

  describe('hasError', () => {
    it('should return a type of HAS_ERROR with the error message', () => {
      const mockError = 'There was an error.'
      const expected = {
        type: 'HAS_ERROR',
        message: mockError
      }
      const result = actions.hasError(mockError);
      expect(result).toEqual(expected);
    });
  });
});