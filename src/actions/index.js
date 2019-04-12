export const setSafety = (data) => ({
  type: 'SET_SAFETY',
  data
});

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})