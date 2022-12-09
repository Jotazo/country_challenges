import { ICountryWithSuccess } from "../interfaces/oCountry";

export interface IAppState {
  isFinished: boolean;
  isSuccess: boolean;
  timeLeft: number;
  score: number;
  lifes: number;
}

export interface IAppContext {
  appState: IAppState;
  setAnswer: Function;
  setNext: Function;
  setFinished: Function;
  setCountdownTimer: Function;
  restartGame: Function;
  gameSelected: string;
  setGameSelected: Function;
}

export interface IQuizzContext {
  randomQuiz: ICountryWithSuccess[];
  oCountrySuccess: ICountryWithSuccess;
  getNewQuizz: Function;
}
