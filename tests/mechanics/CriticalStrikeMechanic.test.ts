import { DamageService } from './../../src/game-core/DamageService';
import { CriticalStrikeSkill } from './../../src/game-core/skills/skills/CriticalStrike/CriticalStrikeSkill';
import { Unit } from './../../src/game-core/Unit/Unit';
import { AttackBehavior } from './../../src/game-core/unit-behavior/AttackBehavior/AttackBehavior';
import { IAttackBehavior } from './../../src/game-core/unit-behavior/AttackBehavior/IAttackBehavior';
import { IWithAttackBehavior } from '../../src/game-core/unit-behavior/AttackBehavior/IAttackBehavior';
import {
  IWithSkillsBehavior,
  ISkillsBehavior,
} from '../../src/game-core/unit-behavior/SkillsBehavior/ISkillsBehavior';
import { SkillsBehavior } from '../../src/game-core/unit-behavior/SkillsBehavior/SkillsBehavior';

describe('CriticalStrikeMechanic', () => {
  test('Critical strike is working correct', () => {
    class Attacker extends Unit implements IWithAttackBehavior, IWithSkillsBehavior {
      attackBehavior: IAttackBehavior;
      skillsBehavior: ISkillsBehavior;

      constructor() {
        super('TestUnit', 100);
        this.attackBehavior = new AttackBehavior(10, 10);
        this.skillsBehavior = new SkillsBehavior();

        const skills = [this.getCriticalStrikeSkill()];
        this.skillsBehavior.initSkills(skills);
      }

      getCriticalStrikeSkill() {
        const chance = 100;
        const multipler = 2;
        return new CriticalStrikeSkill(chance, multipler, this);
      }
    }

    class Target extends Unit {
      constructor() {
        super('TestTarget', 100, 0);
      }
    }

    const attacker = new Attacker();
    const target = new Target();
    const damageService = new DamageService();

    damageService.attack(attacker, target);

    expect(target.healthBehavior.getCurrentHealth()).toBe(80);
  });
});
