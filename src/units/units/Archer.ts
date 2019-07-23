import { Unit } from '../../game-core/Unit/Unit';
import {
  IWithHealthBehavior,
  IHealthBehavior,
} from './../../game-core/behavior/HealthBehavior/IHealthBehavior';
import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';

export class Archer extends Unit implements IWithHealthBehavior {
  healthBehavior: IHealthBehavior;

  constructor() {
    super('Archer');
    this.healthBehavior = new HealthBehavior(300);
  }
}
