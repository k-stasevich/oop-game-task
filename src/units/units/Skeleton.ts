import { Unit } from '../../game-core/Unit/Unit';
import { IWithHealthBehavior } from './../../game-core/behavior/HealthBehavior/IHealthBehavior';
import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';
import { IHealthBehavior } from '../../game-core/behavior/HealthBehavior/IHealthBehavior';

export class Skeleton extends Unit implements IWithHealthBehavior {
  healthBehavior: IHealthBehavior;

  constructor() {
    super('Skeleton');
    this.healthBehavior = new HealthBehavior(180);
  }
}
