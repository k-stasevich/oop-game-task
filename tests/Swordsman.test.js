import { Swordsman } from '../src/units/units/Swordsman';

describe('Swordsman', () => {
  test('Swordsman should have correct HP', () => {
    const swordsman = new Swordsman();

    expect(swordsman.healthBehavior.getMaxHealth()).toBe(500);
  });
});
