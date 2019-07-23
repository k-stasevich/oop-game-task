import { IUnit } from './IUnit';

export class Unit implements IUnit {
  constructor(public name: string) {}

  getName(): string {
    return this.name;
  }
}
