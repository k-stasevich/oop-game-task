import { ArmorBehavior } from './../../game-core/behavior/ArmorBehavior/ArmorBehavior';
import {
  IWithArmorBehavior,
  IArmorBehavior,
} from './../../game-core/behavior/ArmorBehavior/IArmorBehavior';
import { AttackBehavior } from './../../game-core/behavior/AttackBehavior/AttackBehavior';
import {
  IWithAttackBehavior,
  IAttackBehavior,
} from './../../game-core/behavior/AttackBehavior/IAttackBehavior';
import { Unit } from '../../game-core/Unit/Unit';
import {
  IWithHealthBehavior,
  IHealthBehavior,
} from './../../game-core/behavior/HealthBehavior/IHealthBehavior';
import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';

export class Swordsman extends Unit
  implements IWithHealthBehavior, IWithAttackBehavior, IWithArmorBehavior {
  healthBehavior: IHealthBehavior;
  attackBehavior: IAttackBehavior;
  armorBehavior: IArmorBehavior;

  constructor() {
    super('Swordsman');
    this.healthBehavior = new HealthBehavior(500);
    this.attackBehavior = new AttackBehavior(20, 30);
    this.armorBehavior = new ArmorBehavior(2);
  }
}
