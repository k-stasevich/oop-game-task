import { Skeleton } from '../../src/game-core/units/units';
import {CriticalStrikeSkill} from '../../src/game-core/skills/skills/CriticalStrike/CriticalStrikeSkill';

describe('Skeleton', () => {
  const unit = new Skeleton();

  test('Skeleton should have correct HP', () => {
    expect(unit.healthBehavior.getMaxHealth()).toBe(180);
  });

  test('Should have correct damage', () => {
    expect(unit.attackBehavior.getMinDamage()).toBe(5);
    expect(unit.attackBehavior.getMaxDamage()).toBe(8);
  });

  test('Should have correct armor', () => {
    expect(unit.armorBehavior.getArmor()).toBe(1);
  });

  test('Should have Critical Strike skill with correct parameters', () => {
    const skills = unit.skillsBehavior.getSkills();

    const criticalStrike = skills.find(skill => {
      return skill instanceof CriticalStrikeSkill;
    });

    expect(!!criticalStrike).toBe(true);
    expect(criticalStrike.getChance()).toBe(20);
    expect(criticalStrike.getMultiplier()).toBe(2);
  });
});
