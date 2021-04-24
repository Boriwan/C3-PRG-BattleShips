import {FieldValue} from './field_value.enum';

export interface IField {
  getFieldValue(): FieldValue;
}

export class State implements IField {
  revealed = false;
  ship: boolean;

  constructor(ship: boolean) {
    this.ship = ship;
  }

  getFieldValue(): FieldValue {
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
