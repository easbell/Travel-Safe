export const setData = (data) => ({
  type: 'SET_DATA',
  data
});

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})

export const setSaved = (id) => ({
  type: 'SET_SAVED',
  id
})