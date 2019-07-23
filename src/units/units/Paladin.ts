import {
  IAttackBehavior,
  IWithAttackBehavior,
} from './../../game-core/behavior/AttackBehavior/IAtackerBehavior';
import { AttackBehavior } from './../../game-core/behavior/AttackBehavior/AttackBehavior';
import { Unit } from '../../game-core/Unit/Unit';
import {
  IHealthBehavior,
  IWithHealthBehavior,
} from './../../game-core/behavior/HealthBehavior/IHealthBehavior';
import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';

export class Paladin extends Unit implements IWithHealthBehavior, IWithAttackBehavior {
  healthBehavior: IHealthBehavior;
  attackBehavior: IAttackBehavior;

  constructor() {
    super('Paladin');
    this.healthBehavior = new HealthBehavior(700);
    this.attackBehavior = new AttackBehavior(40, 50);
  }
}
