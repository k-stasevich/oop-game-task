import { ArcherCaptain } from '../src/units/units/ArcherCaptain';

describe('ArcherCaptain', () => {
  const unit = new ArcherCaptain();

  test('Should have correct HP', () => {
    expect(unit.healthBehavior.getMaxHealth()).toBe(600);
  });

  test('Should have correct damage', () => {
    expect(unit.attackBehavior.getMinDamage()).toBe(30);
    expect(unit.attackBehavior.getMaxDamage()).toBe(35);
  });
});
