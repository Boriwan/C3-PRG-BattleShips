import { Component } from '@angular/core';
import {Game} from './Game';
import {FieldValue} from './field_value.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BattleShips';

  game = new Game();
  water = FieldValue.WATER;
  ship = FieldValue.SHIP;
  hidden = FieldValue.HIDDEN;
}
