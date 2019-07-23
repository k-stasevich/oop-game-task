import { Paladin } from '../src/units/units/Paladin';

describe('Paladin', () => {
  test('Paladin should have correct HP', () => {
    const paladin = new Paladin();

    expect(paladin.healthBehavior.getMaxHealth()).toBe(700);
  });
});
