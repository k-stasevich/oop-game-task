import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';
import { Unit } from '../../game-core/Unit/Unit';

export class ArcherCaptain extends Unit {
  constructor() {
    super('Archer Captain', new HealthBehavior(600));
  }
}
