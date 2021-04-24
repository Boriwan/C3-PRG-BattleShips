export enum FieldValue {
  WATER, SHIP, HIDDEN
}

export interface IField {
  readonly value: FieldValue;
  shoot(): IGame;
}

export interface IGame {
  readonly grid: IField[][];
  readonly didWin: boolean;
}
