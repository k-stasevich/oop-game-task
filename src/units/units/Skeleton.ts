import { AttackBehavior } from './../../game-core/behavior/AttackBehavior/AttackBehavior';
import {
  IWithAttackBehavior,
  IAttackBehavior,
} from './../../game-core/behavior/AttackBehavior/IAtackerBehavior';
import { Unit } from '../../game-core/Unit/Unit';
import { IWithHealthBehavior } from './../../game-core/behavior/HealthBehavior/IHealthBehavior';
import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';
import { IHealthBehavior } from '../../game-core/behavior/HealthBehavior/IHealthBehavior';

export class Skeleton extends Unit implements IWithHealthBehavior, IWithAttackBehavior {
  healthBehavior: IHealthBehavior;
  attackBehavior: IAttackBehavior;

  constructor() {
    super('Skeleton');
    this.healthBehavior = new HealthBehavior(180);
    this.attackBehavior = new AttackBehavior(5, 8);
  }
}
