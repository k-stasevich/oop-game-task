export interface IWithAttackBehavior {
  attackBehavior: IAttackBehavior;
}

export interface IAttackBehavior {
  minDamage: number;
  maxDamage: number;

  getMinDamage(): number;
  getMaxDamage(): number;
}
