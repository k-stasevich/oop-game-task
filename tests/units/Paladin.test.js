import { Paladin } from '../../src/game-core/units/units';
import {CriticalStrikeSkill} from '../../src/game-core/skills/skills/CriticalStrike/CriticalStrikeSkill';

describe('Paladin', () => {
  const unit = new Paladin();

  test('Paladin should have correct HP', () => {
    expect(unit.healthBehavior.getMaxHealth()).toBe(700);
  });

  test('Should have correct damage', () => {
    expect(unit.attackBehavior.getMinDamage()).toBe(40);
    expect(unit.attackBehavior.getMaxDamage()).toBe(50);
  });

  test('Should have correct armor', () => {
    expect(unit.armorBehavior.getArmor()).toBe(5);
  });

  test('Should have correct MP', () => {
    expect(unit.manaBehavior.getMaxMana()).toBe(300);
  });

  test('Should have Critical Strike skill with correct parameters', () => {
    const skills = unit.skillsBehavior.getSkills();

    const criticalStrike = skills.find(skill => {
      return skill instanceof CriticalStrikeSkill;
    });

    expect(!!criticalStrike).toBe(true);
    expect(criticalStrike.getChance()).toBe(30);
    expect(criticalStrike.getMultiplier()).toBe(3);
  });
});
