export const parseCountries = (aoCountries) => {
  const aoCountriesFilteredWithCapital =
    filterCountriesWithCapital(aoCountries);
  const aoCountriesFilteredWithOnlyOneCapital =
    filterCountriesWithOnlyOneCapital(aoCountriesFilteredWithCapital);
  return aoCountriesFilteredWithOnlyOneCapital.map((oCountry) => {
    return {
      name: oCountry.translations.spa.common,
      capital: oCountry.capital[0],
      flag: oCountry.flags.png
    };
  });
};

const filterCountriesWithCapital = (aoCountries) => {
  return aoCountries.filter((oCountry) => oCountry.capital);
};

const filterCountriesWithOnlyOneCapital = (aoCountries) => {
  return aoCountries.filter((oCountry) => oCountry.capital.length === 1);
};
