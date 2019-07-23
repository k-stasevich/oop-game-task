import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';
import { Unit } from '../../game-core/Unit/Unit';

export class Skeleton extends Unit {
  constructor() {
    super('Skeleton', new HealthBehavior(180));
  }
}
