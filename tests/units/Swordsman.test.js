import { Swordsman } from '../../src/game-core/units/units';

describe('Swordsman', () => {
  const unit = new Swordsman();

  test('Swordsman should have correct HP', () => {
    expect(unit.healthBehavior.getMaxHealth()).toBe(500);
  });

  test('Should have correct damage', () => {
    expect(unit.attackBehavior.getMinDamage()).toBe(20);
    expect(unit.attackBehavior.getMaxDamage()).toBe(30);
  });

  test('Should have correct armor', () => {
    expect(unit.armorBehavior.getArmor()).toBe(2);
  });
});
