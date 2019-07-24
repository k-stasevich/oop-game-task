import { RandomHelper } from './../../../../helpers/RandomHelper';
import { IDamageTarget } from './../../../DamageService';
import {
  IAttackModifier,
  IWithAttackBehavior,
} from './../../../behavior/AttackBehavior/IAttackBehavior';

export class CriticalStrikeAttackModifier implements IAttackModifier {
  constructor(private chance: number, private multipler: number) {}

  applyAttackModifier(
    damage: number,
    attacker: IWithAttackBehavior,
    target: IDamageTarget,
  ): number {
    const isCritical = RandomHelper.chance(this.chance);

    return isCritical ? Math.round(damage * this.multipler) : damage;
  }
}
