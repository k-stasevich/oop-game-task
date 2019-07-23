import { Unit } from '../../game-core/Unit/Unit';
import {
  IWithHealthBehavior,
  IHealthBehavior,
} from './../../game-core/behavior/HealthBehavior/IHealthBehavior';
import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';

export class Swordsman extends Unit implements IWithHealthBehavior {
  healthBehavior: IHealthBehavior;

  constructor() {
    super('Swordsman');
    this.healthBehavior = new HealthBehavior(500);
  }
}
