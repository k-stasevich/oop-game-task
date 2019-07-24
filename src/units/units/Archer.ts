import { ArmorBehavior } from './../../game-core/behavior/ArmorBehavior/ArmorBehavior';
import {
  IWithArmorBehavior,
  IArmorBehavior,
} from './../../game-core/behavior/ArmorBehavior/IArmorBehavior';
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

export class Archer extends Unit
  implements IWithHealthBehavior, IWithAttackBehavior, IWithArmorBehavior {
  healthBehavior: IHealthBehavior;
  attackBehavior: IAttackBehavior;
  armorBehavior: IArmorBehavior;

  constructor() {
    super('Archer');
    this.healthBehavior = new HealthBehavior(300);
    this.attackBehavior = new AttackBehavior(15, 20);
    this.armorBehavior = new ArmorBehavior(0);
  }
}
