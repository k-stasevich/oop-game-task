import { CriticalStrikeSkill } from './../../skills/skills/CriticalStrike/CriticalStrikeSkill';
import { SkillsBehavior } from './../../unit-behavior/SkillsBehavior/SkillsBehavior';
import { AttackBehavior } from '../../unit-behavior/AttackBehavior/AttackBehavior';
import {
  IWithAttackBehavior,
  IAttackBehavior,
} from '../../unit-behavior/AttackBehavior/IAttackBehavior';
import { Unit } from '../../Unit/Unit';
import {
  IWithSkillsBehavior,
  ISkillsBehavior,
} from '../../unit-behavior/SkillsBehavior/ISkillsBehavior';

const defaultHealth = 180;
const defaultArmor = 1;

export class Skeleton extends Unit implements IWithAttackBehavior, IWithSkillsBehavior {
  attackBehavior: IAttackBehavior;
  skillsBehavior: ISkillsBehavior;

  constructor() {
    super('Skeleton', defaultHealth, defaultArmor);
    this.attackBehavior = new AttackBehavior(5, 8);
    this.skillsBehavior = new SkillsBehavior();

    this.initSkills();
  }

  initSkills() {
    const skills = [this.getCriticalStrikeSkill()];
    this.skillsBehavior.initSkills(skills);
  }

  getCriticalStrikeSkill() {
    return new CriticalStrikeSkill(20, 2, this);
  }
}
