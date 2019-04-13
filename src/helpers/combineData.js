export const combineData = (safety, vaccines) => {
  return Object.keys(vaccines).reduce((acc, vaccObj) => {
    Object.keys(safety).filter(safetyCountry => {
      if(safetyCountry === vaccObj) {
        return (
          acc.push({name: safety[safetyCountry].name, rating: safety[safetyCountry].advisory.score, vaccines: vaccines[vaccObj]})
        )
      }
    });
    return acc;
  }, []);
}