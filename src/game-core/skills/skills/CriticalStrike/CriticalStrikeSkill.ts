import { CriticalStrikeAttackModifier } from './CriticalStrikeAttackModifier';
import { ISkill } from '../../Skill';
import { IWithAttackBehavior } from '../../../behavior/AttackBehavior/IAttackBehavior';

export class CriticalStrikeSkill implements ISkill {
  constructor(chance: number, multipler: number, unit: IWithAttackBehavior) {
    this.chance = chance;
    this.multiplier = multipler;

    const criticalStrikeAttackModifier = new CriticalStrikeAttackModifier(
      this.chance,
      this.multiplier,
    );
    unit.attackBehavior.addAttackModifier(criticalStrikeAttackModifier);
  }

  getName(): string {
    return 'Critical Strike';
  }

  isActive(): boolean {
    return false;
  }

  isPassive(): boolean {
    return true;
  }

  private chance: number;
  private multiplier: number;
}
