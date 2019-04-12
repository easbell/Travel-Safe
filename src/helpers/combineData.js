export const combineData = (safety, vaccines) => {
  const vaccineCountries = Object.keys(vaccines);
  const safetyCountries = Object.keys(safety);
  return vaccineCountries.reduce((acc, vaccObj) => {
    safetyCountries.filter(safetyCountry => {
      if(safetyCountry === vaccObj) {
        return (
          acc.push({name: safety[safetyCountry].name, rating: safety[safetyCountry].advisory.score, vaccines: vaccines[vaccObj]})
        )
      }
    });
    return acc;
  }, []);
}