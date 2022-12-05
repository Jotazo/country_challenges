const getRandomIndex = (anIndexSelected, nMax) => {
  let nRandomIndex = Math.floor(Math.random() * nMax);
  while (anIndexSelected.includes(nRandomIndex)) {
    nRandomIndex = Math.floor(Math.random() * nMax);
  }
  return nRandomIndex;
};

const setSuccessCountry = (aoCountries) => {
  const nMax = aoCountries.length;
  const nRandomIndex = getRandomIndex([], nMax);
  const aoRandomCountriesWithSuccess = aoCountries.map((oCountry, index) => {
    return {
      ...oCountry,
      selected: nRandomIndex === index,
    };
  });
  return aoRandomCountriesWithSuccess;
};

const setLettersToCountry = (aoCountries) => {
  const LETTERS = ["A.", "B.", "C.", "D."];
  return aoCountries.map((oCountry, index) => {
    return {
      ...oCountry,
      letter: LETTERS[index],
    };
  });
};

const getRandomCountries = (aoCountries) => {
  if (aoCountries.length === 0) return [];
  const aoRandomCountries = [];
  const anIndexSelected = [];
  const nMax = aoCountries.length;
  for (let i = 0; i < 4; i++) {
    const nRandomIndex = getRandomIndex(anIndexSelected, nMax);
    anIndexSelected.push(nRandomIndex);
    aoRandomCountries.push({
      ...aoCountries[nRandomIndex],
      isClicked: false,
    });
  }
  const aoRandomCountriesWithLetters = setLettersToCountry(aoRandomCountries);
  return setSuccessCountry(aoRandomCountriesWithLetters);
};

export default getRandomCountries;
