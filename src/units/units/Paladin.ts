import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';
import { Unit } from '../../game-core/Unit/Unit';

export class Paladin extends Unit {
  constructor() {
    super('Paladin', new HealthBehavior(700));
  }
}
