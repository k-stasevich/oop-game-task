import { IUnit } from './../../Unit/IUnit';
import {
  IWithSkillsBehavior,
  ISkillsBehavior,
} from './../../unit-behavior/SkillsBehavior/ISkillsBehavior';
import { ManaBehavior } from '../../unit-behavior/ManaBehavior/ManaBehavior';
import { AttackBehavior } from '../../unit-behavior/AttackBehavior/AttackBehavior';
import {
  IWithAttackBehavior,
  IAttackBehavior,
} from '../../unit-behavior/AttackBehavior/IAttackBehavior';
import { Unit } from '../../Unit/Unit';
import { IWithManaBehavior, IManaBehavior } from '../../unit-behavior/ManaBehavior/IManaBehavior';
import { ShotSkill } from '../../skills/skills/Shot/ShotSkill';

const defaultHealth = 300;
const defaultArmor = 0;

export class Archer extends Unit
  implements IWithAttackBehavior, IWithManaBehavior, IWithSkillsBehavior {
  attackBehavior: IAttackBehavior;
  manaBehavior: IManaBehavior;
  skillsBehavior: ISkillsBehavior;

  constructor() {
    super('Archer', defaultHealth, defaultArmor);

    this.attackBehavior = new AttackBehavior(15, 20);
    this.manaBehavior = new ManaBehavior(100);
  }

  initSkills() {
    const skills = [this.getShotSkill()];
    this.skillsBehavior.initSkills(skills);
  }

  castShot(target: IUnit) {
    const shotSkill = this.skillsBehavior.getSkills().find(i => i instanceof ShotSkill);
    if (shotSkill instanceof ShotSkill) return shotSkill.apply(target);
  }

  getShotSkill() {
    const damage = 100;
    const manaCost = 50;
    return new ShotSkill(damage, manaCost, this);
  }
}
