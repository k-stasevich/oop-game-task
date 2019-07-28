import {
  IWithArmorBehavior,
  IArmorBehavior,
} from '../../unit-behavior/ArmorBehavior/IArmorBehavior';
import { AttackBehavior } from '../../unit-behavior/AttackBehavior/AttackBehavior';
import {
  IWithAttackBehavior,
  IAttackBehavior,
} from '../../unit-behavior/AttackBehavior/IAttackBehavior';
import { Unit } from '../../Unit/Unit';
import {
  IWithHealthBehavior,
  IHealthBehavior,
} from '../../unit-behavior/HealthBehavior/IHealthBehavior';

const defaultHealth = 500;
const defaultArmor = 2;

export class Swordsman extends Unit implements IWithAttackBehavior {
  attackBehavior: IAttackBehavior;

  constructor() {
    super('Swordsman', defaultHealth, defaultArmor);
    this.attackBehavior = new AttackBehavior(20, 30);
  }
}
