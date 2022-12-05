import { parseCountries } from "./utils";

const API_URLS = {
  all: "https://restcountries.com/v3.1/all",
};

export const getAllCountries = async () => {
  const res = await fetch(API_URLS.all);
  const aoAllCountries = await res.json();
  const aoParsedCountries = parseCountries(aoAllCountries);
  return aoParsedCountries;
};