import { IApiCountry } from "../interfaces/CountriesApi";
import { ICountryParsed } from "../interfaces/oCountry";

export const parseCountries = (
  aoCountries: IApiCountry[]
): ICountryParsed[] => {
  const aoCountriesFilteredWithCapital =
    filterCountriesWithCapital(aoCountries);
  const aoCountriesFilteredWithOnlyOneCapital =
    filterCountriesWithOnlyOneCapital(aoCountriesFilteredWithCapital);
  const aoCountriesRecognized = filterCountriesRecognized(
    aoCountriesFilteredWithOnlyOneCapital
  );
  return aoCountriesRecognized.map((oCountry: IApiCountry) => {
    return {
      name: {
        spa: oCountry.translations.spa.common,
        eng: oCountry.name.common
      },
      capital: oCountry.capital?.[0] || "",
      flag: oCountry.flags.png,
    };
  });
};

const filterCountriesWithCapital = (
  aoCountries: IApiCountry[]
): IApiCountry[] => {
  return aoCountries.filter((oCountry) => oCountry.capital);
};

const filterCountriesWithOnlyOneCapital = (
  aoCountries: IApiCountry[]
): IApiCountry[] => {
  return aoCountries.filter((oCountry) => oCountry.capital?.length === 1);
};

const filterCountriesRecognized = (
  aoCountries: IApiCountry[]
): IApiCountry[] => {
  return aoCountries.filter((oCountry) => oCountry.independent);
};
