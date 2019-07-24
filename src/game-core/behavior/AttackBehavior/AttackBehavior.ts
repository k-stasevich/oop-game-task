import { IAttackBehavior } from './IAttackBehavior';

export class AttackBehavior implements IAttackBehavior {
  constructor(public minDamage: number, public maxDamage: number) {}

  getMinDamage() {
    return this.minDamage;
  }
  setMinDamage(damage: number) {
    this.minDamage = damage;
  }

  getMaxDamage() {
    return this.maxDamage;
  }
  setMaxDamage(damage: number) {
    this.maxDamage = damage;
  }
}
