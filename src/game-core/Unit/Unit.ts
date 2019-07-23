import { IHealthBehavior } from './../behavior/HealthBehavior/IHealthBehavior';
import { IUnit } from './IUnit';

export class Unit implements IUnit {
  constructor(public name: string, public healthBehavior: IHealthBehavior) {}

  getName(): string {
    return this.name;
  }
}
