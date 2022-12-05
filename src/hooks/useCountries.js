import { useEffect, useState } from "react";
import { getAllCountries } from "../services/api";

const useCountries = (initialState) => {
  const [countries, setCountries] = useState(initialState);

  useEffect(() => {
    getAllCountries().then(setCountries);
  }, []);

  return { countries };
};

export default useCountries;
