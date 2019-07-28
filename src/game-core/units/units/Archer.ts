import { ManaBehavior } from '../../unit-behavior/ManaBehavior/ManaBehavior';
import { AttackBehavior } from '../../unit-behavior/AttackBehavior/AttackBehavior';
import {
  IWithAttackBehavior,
  IAttackBehavior,
} from '../../unit-behavior/AttackBehavior/IAttackBehavior';
import { Unit } from '../../Unit/Unit';
import { IWithManaBehavior, IManaBehavior } from '../../unit-behavior/ManaBehavior/IManaBehavior';

const defaultHealth = 300;
const defaultArmor = 0;

export class Archer extends Unit implements IWithAttackBehavior, IWithManaBehavior {
  attackBehavior: IAttackBehavior;
  manaBehavior: IManaBehavior;

  constructor() {
    super('Archer', defaultHealth, defaultArmor);

    this.attackBehavior = new AttackBehavior(15, 20);
    this.manaBehavior = new ManaBehavior(100);
  }
}
