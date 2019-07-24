export interface IWithAttackBehavior {
  attackBehavior: IAttackBehavior;
}

export interface IAttackBehavior {
  minDamage: number;
  maxDamage: number;

  getMinDamage(): number;
  setMinDamage(damage: number): void;

  getMaxDamage(): number;
  setMaxDamage(damage: number): void;
}
