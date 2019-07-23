import { IAttackBehavior } from './IAtackerBehavior';

export class AttackBehavior implements IAttackBehavior {
  constructor(public minDamage: number, public maxDamage: number) {}

  getMinDamage() {
    return this.minDamage;
  }

  getMaxDamage() {
    return this.maxDamage;
  }
}
