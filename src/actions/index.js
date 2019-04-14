export const setData = (data) => ({
  type: 'SET_DATA',
  data
});

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
});

export const setSaved = (saved) => ({
  type: 'SET_SAVED',
  saved
});