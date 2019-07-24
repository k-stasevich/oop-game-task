import { ArmorBehavior } from './../../game-core/behavior/ArmorBehavior/ArmorBehavior';
import { AttackBehavior } from './../../game-core/behavior/AttackBehavior/AttackBehavior';
import {
  IAttackBehavior,
  IWithAttackBehavior,
} from './../../game-core/behavior/AttackBehavior/IAtackerBehavior';
import { Unit } from '../../game-core/Unit/Unit';
import { HealthBehavior } from './../../game-core/behavior/HealthBehavior/HealthBehavior';
import {
  IWithHealthBehavior,
  IHealthBehavior,
} from './../../game-core/behavior/HealthBehavior/IHealthBehavior';
import {
  IWithArmorBehavior,
  IArmorBehavior,
} from '../../game-core/behavior/ArmorBehavior/IArmorBehavior';

export class ArcherCaptain extends Unit
  implements IWithHealthBehavior, IWithAttackBehavior, IWithArmorBehavior {
  healthBehavior: IHealthBehavior;
  attackBehavior: IAttackBehavior;
  armorBehavior: IArmorBehavior;

  constructor() {
    super('Archer Captain');
    this.healthBehavior = new HealthBehavior(600);
    this.attackBehavior = new AttackBehavior(30, 35);
    this.armorBehavior = new ArmorBehavior(1);
  }
}
