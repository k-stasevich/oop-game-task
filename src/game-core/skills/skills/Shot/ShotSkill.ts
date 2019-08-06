import { ICaster } from './../../../unit-behavior/ManaBehavior/IManaBehavior';
import { IUnit } from './../../../Unit/IUnit';
import { SkillCast } from './../../SkillCast';
import { Skill } from '../../Skill';
import { IWithManaBehavior } from '../../../unit-behavior/ManaBehavior/IManaBehavior';

export class ShotSkill extends Skill {
  constructor(damage: number, manaCost: number, caster: ICaster) {
    super();
    this.damage = damage;
    this.manaCost = manaCost;
    this.caster = caster;
  }

  init(): void {}

  apply(target: IUnit) {
    return new SkillCast(this.caster, target, this.manaCost, this.damage);
  }

  getName() {
    return 'Shot';
  }

  isActive(): boolean {
    return true;
  }

  isPassive(): boolean {
    return false;
  }

  private damage: number;
  private manaCost: number;
  private caster: ICaster;
}
