export const setSafety = (data) => ({
  type: 'SET_SAFETY',
  data
});

export const setVaccines = (data) => ({
  type: 'SET_VACCINES',
  data
});

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})