import { AttackBehavior } from './../../game-core/behavior/AttackBehavior/AttackBehavior';
import {
  IWithAttackBehavior,
  IAttackBehavior,
} from './../../game-core/behavior/AttackBehavior/IAtackerBehavior';
import { Unit } from '../../game-core/Unit/Unit';
import {
  IWithHealthBehavior,
  IHealthBehavior,
} from './../../game-core/behavior/HealthBehavior/IHealthBehavior';
import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';

export class Swordsman extends Unit implements IWithHealthBehavior, IWithAttackBehavior {
  healthBehavior: IHealthBehavior;
  attackBehavior: IAttackBehavior;

  constructor() {
    super('Swordsman');
    this.healthBehavior = new HealthBehavior(500);
    this.attackBehavior = new AttackBehavior(20, 30);
  }
}
