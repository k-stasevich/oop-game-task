import { IAttackBehavior, IAttackModifier } from './IAttackBehavior';

export class AttackBehavior implements IAttackBehavior {
  constructor(public minDamage: number, public maxDamage: number) {
    this.attackModifiers = [];
  }

  attackModifiers: IAttackModifier[];

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

  addAttackModifier(attackModifier: IAttackModifier): void {
    this.attackModifiers.push(attackModifier);
  }
  getAttackModifiers(): IAttackModifier[] {
    return this.attackModifiers;
  }
}
