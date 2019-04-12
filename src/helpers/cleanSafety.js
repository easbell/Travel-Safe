export const cleanSafety = (data) => {
  const parsedData = JSON.parse(data)
  return parsedData.data
}