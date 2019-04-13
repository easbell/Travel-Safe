import { setSafety, hasError } from '../../actions';
import { fetchSafety } from '../fetchSafety';
import { cleanSafety } from '../../helpers/cleanSafety';

jest.mock('../../helpers/cleanSafety');

describe('fetchSafety', () => {
  let mockDispatch;
  let mockData;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockData = {country: 'France', safety: 2.4};
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockData)
    }));
  });

  it('calls fetch', async () => {
    const thunk = fetchSafety();
    await thunk(mockDispatch);
    expect(window.fetch).toHaveBeenCalled();
  });

  it('calls cleanSafety with mockData', async () => {
    const thunk = fetchSafety();
    await thunk(mockDispatch);
    expect(cleanSafety).toHaveBeenCalledWith(mockData);
  });

  it('dispatches setSafety', async () => {
    const thunk = fetchSafety();
    await thunk(mockDispatch);
    const cleanedData = cleanSafety(mockData)
    expect(mockDispatch).toHaveBeenCalledWith(setSafety(cleanedData));
  });

  it('dispatches hasError if something went wrong', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong'
    }));
    const thunk = fetchSafety();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong'));
  });
});