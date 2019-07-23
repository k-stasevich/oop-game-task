import { Archer } from '../src/units/units/Archer';

describe('Archer', () => {
  const unit = new Archer();

  test('Should have correct HP', () => {
    expect(unit.healthBehavior.getMaxHealth()).toBe(300);
  });

  test('Should have correct damage', () => {
    expect(unit.attackBehavior.getMinDamage()).toBe(15);
    expect(unit.attackBehavior.getMaxDamage()).toBe(20);
  });
});
