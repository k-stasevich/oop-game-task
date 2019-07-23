import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';
import { Unit } from '../../game-core/Unit/Unit';

export class Swordsman extends Unit {
  constructor() {
    super('Swordsman', new HealthBehavior(500));
  }
}
