import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';
import { Unit } from '../../game-core/Unit/Unit';

export class Archer extends Unit {
  constructor() {
    super('Archer', new HealthBehavior(300));
  }
}
