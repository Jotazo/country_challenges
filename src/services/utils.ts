import { IApiCountry } from "../interfaces/CountriesApi";
import { ICountryParsed } from "../interfaces/oCountry";

export const parseCountries = (
  aoCountries: IApiCountry[]
): ICountryParsed[] => {
  const aoCountriesFilteredWithCapital =
    filterCountriesWithCapital(aoCountries);
  const aoCountriesFilteredWithOnlyOneCapital =
    filterCountriesWithOnlyOneCapital(aoCountriesFilteredWithCapital);
  return aoCountriesFilteredWithOnlyOneCapital.map((oCountry: IApiCountry) => {
    return {
      name: oCountry.translations.spa.common,
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
