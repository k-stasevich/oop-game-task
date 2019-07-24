import { ManaBehavior } from './../../game-core/behavior/ManaBehavior/ManaBehavior';
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
import {
  IWithManaBehavior,
  IManaBehavior,
} from '../../game-core/behavior/ManaBehavior/IManaBehavior';

export class Archer extends Unit
  implements
    IWithHealthBehavior,
    IWithAttackBehavior,
    IWithArmorBehavior,
    IWithManaBehavior {
  healthBehavior: IHealthBehavior;
  attackBehavior: IAttackBehavior;
  armorBehavior: IArmorBehavior;
  manaBehavior: IManaBehavior;

  constructor() {
    super('Archer');
    this.healthBehavior = new HealthBehavior(300);
    this.attackBehavior = new AttackBehavior(15, 20);
    this.armorBehavior = new ArmorBehavior(0);
    this.manaBehavior = new ManaBehavior(100);
  }
}
