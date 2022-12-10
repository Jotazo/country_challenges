import { ICountryWithSuccess } from "../interfaces/oCountry";

export interface IAppState {
  isFinished: boolean;
  isSuccess: boolean;
  score: number;
  lifes: number;
  timerKey: number;
  languageSelected: string;
}

export interface IAppContext {
  appState: IAppState;
  setAnswer: Function;
  setNext: Function;
  setFinished: Function;
  restartGame: Function;
  gameSelected: string;
  setGameSelected: Function;
}

export interface IQuizzContext {
  randomQuiz: ICountryWithSuccess[];
  oCountrySuccess: ICountryWithSuccess;
  getNewQuizz: Function;
}
