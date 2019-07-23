import { Archer } from '../src/units/units/Archer';

describe('Archer', () => {
  const archer = new Archer();

  test('Archer should have correct HP', () => {
    expect(archer.healthBehavior.getMaxHealth()).toBe(300);
  });
});
