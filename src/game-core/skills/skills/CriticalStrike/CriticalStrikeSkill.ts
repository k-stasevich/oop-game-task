import { IUnit } from './../../../Unit/IUnit';
import { ISkill } from '../../Skill';
import { IWithAttackBehavior } from './../../../unit-behavior/AttackBehavior/IAttackBehavior';
import { CriticalStrikeAttackModifier } from './CriticalStrikeAttackModifier';
import { IWithSkillsBehavior } from '../../../unit-behavior/SkillsBehavior/ISkillsBehavior';

interface IUnitWithCriticalStrike extends IUnit, IWithAttackBehavior, IWithSkillsBehavior {}

export class CriticalStrikeSkill implements ISkill {
  constructor(chance: number, multipler: number, unit: IUnitWithCriticalStrike) {
    this.chance = chance;
    this.multiplier = multipler;
    this.unit = unit;
  }

  init(): void {
    const criticalStrikeAttackModifier = new CriticalStrikeAttackModifier(
      this.chance,
      this.multiplier,
    );
    this.unit.attackBehavior.addAttackModifier(criticalStrikeAttackModifier);
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
  private unit: IWithAttackBehavior;
}
