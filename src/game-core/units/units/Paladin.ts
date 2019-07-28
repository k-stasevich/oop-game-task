import { CriticalStrikeSkill } from './../../skills/skills/CriticalStrike/CriticalStrikeSkill';
import { SkillsBehavior } from './../../unit-behavior/SkillsBehavior/SkillsBehavior';
import { ManaBehavior } from '../../unit-behavior/ManaBehavior/ManaBehavior';
import { IManaBehavior } from '../../unit-behavior/ManaBehavior/IManaBehavior';
import {
  IAttackBehavior,
  IWithAttackBehavior,
} from '../../unit-behavior/AttackBehavior/IAttackBehavior';
import { AttackBehavior } from '../../unit-behavior/AttackBehavior/AttackBehavior';
import { Unit } from '../../Unit/Unit';
import { IWithManaBehavior } from '../../unit-behavior/ManaBehavior/IManaBehavior';
import {
  IWithSkillsBehavior,
  ISkillsBehavior,
} from '../../unit-behavior/SkillsBehavior/ISkillsBehavior';

const defaultHealth = 700;
const defaultArmor = 5;

export class Paladin extends Unit
  implements IWithAttackBehavior, IWithManaBehavior, IWithSkillsBehavior {
  attackBehavior: IAttackBehavior;
  manaBehavior: IManaBehavior;
  skillsBehavior: ISkillsBehavior;

  constructor() {
    super('Paladin', defaultHealth, defaultArmor);
    this.attackBehavior = new AttackBehavior(40, 50);
    this.manaBehavior = new ManaBehavior(300);
    this.skillsBehavior = new SkillsBehavior();

    this.initSkills();
  }

  initSkills() {
    const skills = [this.getCriticalStrikeSkill()];
    this.skillsBehavior.initSkills(skills);
  }

  getCriticalStrikeSkill() {
    return new CriticalStrikeSkill(30, 3, this);
  }
}
