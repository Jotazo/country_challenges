export interface ICountryParsed {
  name: {
    [index: string]: string;
  };
  capital: string;
  flag: string;
}

export interface ICountryWithClicked extends ICountryParsed {
  isClicked: boolean;
}

export interface ICountryWithLetter extends ICountryWithClicked {
  letter: string;
}

export interface ICountryWithSuccess extends ICountryWithLetter {
  selected: boolean;
}
