import { ArcherCaptain } from '../../src/game-core/units/units';

describe('ArcherCaptain', () => {
  const unit = new ArcherCaptain();

  test('Should have correct HP', () => {
    expect(unit.healthBehavior.getMaxHealth()).toBe(600);
  });

  test('Should have correct damage', () => {
    expect(unit.attackBehavior.getMinDamage()).toBe(30);
    expect(unit.attackBehavior.getMaxDamage()).toBe(35);
  });

  test('Should have correct armor', () => {
    expect(unit.armorBehavior.getArmor()).toBe(1);
  });

  test('Should have correct MP', () => {
    expect(unit.manaBehavior.getMaxMana()).toBe(200);
  });
});
