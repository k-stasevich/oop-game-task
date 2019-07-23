import { Unit } from '../../game-core/Unit/Unit';
import {
  IHealthBehavior,
  IWithHealthBehavior,
} from './../../game-core/behavior/HealthBehavior/IHealthBehavior';
import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';

export class Paladin extends Unit implements IWithHealthBehavior {
  healthBehavior: IHealthBehavior;

  constructor() {
    super('Paladin');
    this.healthBehavior = new HealthBehavior(700);
  }
}
