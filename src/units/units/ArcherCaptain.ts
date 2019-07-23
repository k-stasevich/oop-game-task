import { Unit } from '../../game-core/Unit/Unit';
import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';
import {
  IWithHealthBehavior,
  IHealthBehavior,
} from './../../game-core/behavior/HealthBehavior/IHealthBehavior';

export class ArcherCaptain extends Unit implements IWithHealthBehavior {
  healthBehavior: IHealthBehavior;
  IHealthBehavior;
  constructor() {
    super('Archer Captain');
    this.healthBehavior = new HealthBehavior(600);
  }
}
