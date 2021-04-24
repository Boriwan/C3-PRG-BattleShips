export enum FieldValue {
  WATER, SHIP, HIDDEN
}

export interface IField {
  getState(): FieldValue;
}

class State implements IField {
  revealed = false;
  ship: boolean;

  constructor(ship: boolean) {
    this.ship = ship;
  }

  getState(): FieldValue {
    if (!this.revealed) {
      return FieldValue.HIDDEN;
    }
    if (this.ship) {
      return FieldValue.SHIP;
    }
    else {
      return FieldValue.WATER;
    }
  }
}

export class Game {
  score = 0;
  remaining = 8;
  startGame = true;
  endGame = false;

  readonly grid: State[] = [
    new State(false),
    new State(true),
    new State(false),
    new State(true),
    new State(false),
    new State(true),
    new State(true),
    new State(false),
    new State(false),
    new State(true),
    new State(false),
    new State(true),
    new State(false),
    new State(true),
    new State(false),
    new State(true)
  ];


  randomizedGrid!: IField[];

  getRandomField(): IField[] {
    this.randomizedGrid = this.grid.slice(0, this.grid.length);
    this.randomizedGrid = this.randomizedGrid.sort(() => Math.random() - 0.5);
    console.log(this.randomizedGrid);
    return this.randomizedGrid;
  }

  shoot(shot: IField): void {
    (shot as State).revealed = true;
    if ((shot as State).ship) {
      this.score++;
      this.remaining--;
    }
    if (!(shot as State).ship) {
      this.score = Math.round(this.score / 2);
    }
    if (this.remaining === 0) {
      this.startGame = false;
      this.endGame = true;
    }
  }

  restartGame(): void {
    this.score = 0;
    this.remaining = 8;
    this.startGame = true;
    this.endGame = false;
  }
}
