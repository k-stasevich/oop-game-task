import { ManaBehavior } from '../../unit-behavior/ManaBehavior/ManaBehavior';
import { IManaBehavior } from '../../unit-behavior/ManaBehavior/IManaBehavior';
import {
  IWithArmorBehavior,
  IArmorBehavior,
} from '../../unit-behavior/ArmorBehavior/IArmorBehavior';
import {
  IAttackBehavior,
  IWithAttackBehavior,
} from '../../unit-behavior/AttackBehavior/IAttackBehavior';
import { AttackBehavior } from '../../unit-behavior/AttackBehavior/AttackBehavior';
import { Unit } from '../../Unit/Unit';
import {
  IHealthBehavior,
  IWithHealthBehavior,
} from '../../unit-behavior/HealthBehavior/IHealthBehavior';
import { IWithManaBehavior } from '../../unit-behavior/ManaBehavior/IManaBehavior';

const defaultHealth = 700;
const defaultArmor = 5;

export class Paladin extends Unit implements IWithAttackBehavior, IWithManaBehavior {
  attackBehavior: IAttackBehavior;
  manaBehavior: IManaBehavior;

  constructor() {
    super('Paladin', defaultHealth, defaultArmor);
    this.attackBehavior = new AttackBehavior(40, 50);
    this.manaBehavior = new ManaBehavior(300);
  }
}
