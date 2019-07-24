import { IDamageTarget } from './../../DamageService';

export interface IWithAttackBehavior {
  attackBehavior: IAttackBehavior;
}

export interface IAttackModifier {
  /**
   * Responsible for logic that modifying a damage
   * @param damage - Damage that attacker deal to target
   * @param attacker - Unit who deal damage to target
   * @param target - Unit that receive damage from attacker
   */
  applyAttackModifier(
    damage: number,
    attacker: IWithAttackBehavior,
    target: IDamageTarget,
  ): number;
}

export interface IAttackBehavior {
  minDamage: number;
  maxDamage: number;

  getMinDamage(): number;
  setMinDamage(damage: number): void;

  getMaxDamage(): number;
  setMaxDamage(damage: number): void;

  addAttackModifier(attackModifier: IAttackModifier): void;
  getAttackModifiers(): IAttackModifier[];
}
