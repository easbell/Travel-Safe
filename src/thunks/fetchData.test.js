import { setData, hasError } from '../actions';
import { fetchData } from './fetchData';

describe('fetchData', () => {
  let mockDispatch;
  let mockData;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockData = [{country: 'France', safety: 2.4}];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData)
    }));
  });

  it('should call fetch', async () => {
    const thunk = fetchData();
    await thunk(mockDispatch)
    expect(window.fetch).toHaveBeenCalled();
  });

  it('dispatches setData', async () => {
    const thunk = fetchData();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(setData(mockData[0]))
  });

  it('dispatches hasError if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }));

    const thunk = fetchData();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong'))
  });
});