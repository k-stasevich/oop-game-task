import { Paladin } from '../../src/units/units/Paladin';

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
});
