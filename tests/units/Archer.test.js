import { Archer } from '../../src/game-core/units/units';

describe('Archer', () => {
  const unit = new Archer();

  test('Should have correct HP', () => {
    expect(unit.healthBehavior.getMaxHealth()).toBe(300);
  });

  test('Should have correct damage', () => {
    expect(unit.attackBehavior.getMinDamage()).toBe(15);
    expect(unit.attackBehavior.getMaxDamage()).toBe(20);
  });

  test('Should have correct armor', () => {
    expect(unit.armorBehavior.getArmor()).toBe(0);
  });

  test('Should have correct MP', () => {
    expect(unit.manaBehavior.getMaxMana()).toBe(100);
  });
});
