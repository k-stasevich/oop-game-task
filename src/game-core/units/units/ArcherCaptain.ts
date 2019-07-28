import { IManaBehavior, IWithManaBehavior } from '../../unit-behavior/ManaBehavior/IManaBehavior';
import { ManaBehavior } from '../../unit-behavior/ManaBehavior/ManaBehavior';
import { AttackBehavior } from '../../unit-behavior/AttackBehavior/AttackBehavior';
import {
  IAttackBehavior,
  IWithAttackBehavior,
} from '../../unit-behavior/AttackBehavior/IAttackBehavior';
import { Unit } from '../../Unit/Unit';
import {
  IWithHealthBehavior,
  IHealthBehavior,
} from '../../unit-behavior/HealthBehavior/IHealthBehavior';
import {
  IWithArmorBehavior,
  IArmorBehavior,
} from '../../unit-behavior/ArmorBehavior/IArmorBehavior';

const defaultHealth = 600;
const defaultArmor = 1;

export class ArcherCaptain extends Unit implements IWithAttackBehavior, IWithManaBehavior {
  attackBehavior: IAttackBehavior;
  manaBehavior: IManaBehavior;

  constructor() {
    super('Archer Captain', defaultHealth, defaultArmor);
    this.attackBehavior = new AttackBehavior(30, 35);
    this.manaBehavior = new ManaBehavior(200);
  }
}
