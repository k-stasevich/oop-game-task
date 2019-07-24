import { Skeleton } from '../../src/units/units/Skeleton';

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
});
