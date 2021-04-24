import { Component } from '@angular/core';
import {LogicService} from './services/logic.service';


export interface Grid {
  icon: string;
  isWater: boolean;
  state: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BattleShips';

  constructor(public logicS: LogicService) {
  }











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

  savedState: Grid | null = null;
  start = false;
  end = false;
  slicedArr!: Grid[];
  score!: number;
  remaining!: number;

  public startGame(): void {

    // resets the game field
    this.arr.forEach(item => {
      item.state = false;
    });
    this.remaining = 5;
    this.score = 0;
    //

    this.start = true;
    this.end = false;
    this.slicedArr = this.arr.slice(0, this.arr.length);
    this.slicedArr = this.slicedArr.sort(() => Math.random() - 0.5);
  }

  show(revealed: Grid): void {
    if (revealed.state) {
      return;
    }

    if (this.savedState === null) {
      revealed.state = true;
      if (!revealed.isWater) {
        this.score++;
        this.remaining--;
      }

      // devides the current score by 2 and rounds it up, if you click on water
      if (revealed.isWater) {
        this.score = Math.round(this.score / 2);
      }
    }
    else {
      revealed.state = revealed.isWater;
   }

    // check if all boats are revealed
    if (this.remaining === 0) {
      this.end = true;
      console.log(this.remaining);
      console.log(this.end);
    }
  }
/*
  clickPoint!: Grid;
  start = false;
  end = false;
  slicedArr!: Grid[];
  score!: number;
  remaining!: number;

  public showGrid(): void {
    this.start = true;
    this.end = false;
    return this.logicS.startGame();
  }

  show(clickPoint: Grid): void {
    if (clickPoint.state) {
      return;
    }
    this.logicS.reveal(clickPoint);
    this.logicS.calculateScore(clickPoint);
    this.logicS.checkBoats(clickPoint);
  }*/
}
