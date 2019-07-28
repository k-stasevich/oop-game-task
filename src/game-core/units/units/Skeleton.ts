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

const defaultHealth = 180;
const defaultArmor = 1;

export class Skeleton extends Unit implements IWithAttackBehavior {
  attackBehavior: IAttackBehavior;

  constructor() {
    super('Skeleton', defaultHealth, defaultArmor);
    this.attackBehavior = new AttackBehavior(5, 8);
  }
}
