import { Injectable } from '@angular/core';

/*
export interface Grid {
  icon: string;
  isWater: boolean;
  state: boolean;
}
*/

@Injectable({
  providedIn: 'root'
})
export class LogicService {


/*
  arr: Grid[] = [
    {icon: '🚤', isWater: false, state: false},
    {icon: '🌊', isWater: true, state: false},
    {icon: '🌊', isWater: true, state: false},
    {icon: '🌊', isWater: true, state: false},
    {icon: '🚤', isWater: false, state: false},
    {icon: '🌊', isWater: true, state: false},
    {icon: '🚤', isWater: false, state: false},
    {icon: '🚤', isWater: false, state: false},
    {icon: '🌊', isWater: true, state: false},
    {icon: '🌊', isWater: true, state: false},
    {icon: '🌊', isWater: true, state: false},
    {icon: '🌊', isWater: true, state: false},
    {icon: '🚤', isWater: false, state: false},
    {icon: '🌊', isWater: true, state: false},
    {icon: '🌊', isWater: true, state: false}
  ];

  savedClick: Grid | null = null;
  start = false;
  end = false;
  slicedArr!: Grid[];
  score!: number;
  remaining!: number;

  public getScore(): number {
    return this.score;
  }

  public getRemaining(): number {
    return this.remaining;
  }

  public startGame(): void {

    // resets the game field
    this.arr.forEach(item => {
      item.state = false;
    });
    this.remaining = 5;
    this.score = 0;
    //


    this.slicedArr = this.arr.slice(0, this.arr.length);
    this.slicedArr = this.slicedArr.sort(() => Math.random() - 0.5);
  }

  reveal(clickPoint: Grid): void {
    if (this.savedClick === null) {
      clickPoint.state = true;
      if (!clickPoint.isWater) {
        this.score++;
        this.remaining--;
      }
    }
  }

  // devides the current score by 2 and rounds it up, if you click on water
    calculateScore(clickPoint: Grid): void {
      if (clickPoint.isWater) {
        this.score = Math.round(this.score / 2);
      }
      else {
        clickPoint.state = clickPoint.isWater;
      }
    }

  // check if all boats are revealed
    checkBoats(clickPoint: Grid): void {
    if (this.remaining === 0) {
      this.end = true;
      console.log(this.remaining);
      console.log(this.end);
    }
  }*/
  constructor() { }
}
