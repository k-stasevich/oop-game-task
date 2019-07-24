import { ManaBehavior } from './../../game-core/behavior/ManaBehavior/ManaBehavior';
import { IManaBehavior } from './../../game-core/behavior/ManaBehavior/IManaBehavior';
import { ArmorBehavior } from './../../game-core/behavior/ArmorBehavior/ArmorBehavior';
import {
  IWithArmorBehavior,
  IArmorBehavior,
} from './../../game-core/behavior/ArmorBehavior/IArmorBehavior';
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
import { IWithManaBehavior } from '../../game-core/behavior/ManaBehavior/IManaBehavior';

export class Paladin extends Unit
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
    super('Paladin');
    this.healthBehavior = new HealthBehavior(700);
    this.attackBehavior = new AttackBehavior(40, 50);
    this.armorBehavior = new ArmorBehavior(5);
    this.manaBehavior = new ManaBehavior(300);
  }
}
