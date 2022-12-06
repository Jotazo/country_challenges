import { useEffect, useState } from "react";
import { ICountryWithSuccess } from "../interfaces/oCountry";

const useOcountry = (initialState: ICountryWithSuccess) => {
  const [oCountry, setOcountry] = useState(initialState);

  useEffect(() => {
    setOcountry(initialState);
  }, [initialState]);

  const setOcountryClicked = () => {
    setOcountry({ ...oCountry, isClicked: true });
  };

  return { oCountry, setOcountryClicked };
};

export default useOcountry;
