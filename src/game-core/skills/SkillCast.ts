import { ICaster } from './../unit-behavior/ManaBehavior/IManaBehavior';
import { IUnit } from './../Unit/IUnit';

export class SkillCast {
  constructor(caster: ICaster, target: IUnit, manaCost: number, damageDealt: number) {
    this.caster = caster;
    this.target = target;
    this.manaCost = manaCost;
    this.damageDealt = damageDealt;
  }

  getCaster() {
    return this.caster;
  }

  getTarget() {
    return this.target;
  }

  getManaCost() {
    return this.manaCost;
  }

  getDamageDealt() {
    return this.damageDealt;
  }

  private caster: ICaster;
  private target: IUnit;
  private manaCost: number;
  private damageDealt: number;
}
