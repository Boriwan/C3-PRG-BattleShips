import {IField, State} from './IField';

export class Game {
  score = 0;
  remaining = 7;
  startGame = true;
  endGame = false;

   grid: State[] = [
    new State(true),
    new State(true),
    new State(false),
    new State(false),
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
    new State(false),
    new State(false),
    new State(true)
  ];

  /**
   * // TODO: shuffle
   */
/*
  randomizedGrid!: IField[];

  getRandomField(): IField[] {
    this.randomizedGrid = this.grid.slice(0, this.grid.length);
    this.randomizedGrid = this.randomizedGrid.sort(() => Math.random() - 0.5);
    return this.randomizedGrid;
  }*/

  shoot(shot: IField): void {
    const shotState = shot as State;

    if (shotState.revealed) {
      return;
    }
    shotState.revealed = true;

    if (shotState.ship) {
      this.score++;
      this.remaining--;
      console.log(this.score);
      console.log(this.remaining);
    }
    if (!shotState.ship) {
      this.score = Math.round(this.score / 2);
    }
    if (this.remaining === 0) {
      this.startGame = false;
      this.endGame = true;
    }
  }

  restartGame(): void {
    this.startGame = true;
    this.endGame = false;

    // resets the game field
    this.grid.forEach(item => {
      item.revealed = false;
    });
    this.remaining = 8;
    this.score = 0;
    //
  }
}
