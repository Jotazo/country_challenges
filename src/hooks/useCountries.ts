import { useEffect, useState } from "react";
import { ICountryParsed } from "../interfaces/oCountry";
import { getAllCountries } from "../services/api";

const useCountries = (initialState: []) => {
  const [countries, setCountries] = useState<ICountryParsed[]>(initialState);

  useEffect(() => {
    getAllCountries().then((parsedCountries: ICountryParsed[]) =>
      setCountries(parsedCountries)
    );
  }, []);

  return { countries };
};

export default useCountries;
