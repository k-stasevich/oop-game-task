import { IUnit } from './../../../Unit/IUnit';
import { Skill } from '../../Skill';
import { IWithAttackBehavior } from './../../../unit-behavior/AttackBehavior/IAttackBehavior';
import { CriticalStrikeAttackModifier } from './CriticalStrikeAttackModifier';
import { IWithSkillsBehavior } from '../../../unit-behavior/SkillsBehavior/ISkillsBehavior';

interface IUnitWithCriticalStrike extends IUnit, IWithAttackBehavior, IWithSkillsBehavior {}

export class CriticalStrikeSkill extends Skill {
  constructor(chance: number, multipler: number, unit: IUnitWithCriticalStrike) {
    super();
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

  getChance() {
    return this.chance;
  }

  getMultiplier() {
    return this.multiplier;
  }

  private chance: number;
  private multiplier: number;
  private unit: IWithAttackBehavior;
}
