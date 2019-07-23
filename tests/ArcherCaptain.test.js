import { ArcherCaptain } from '../src/units/units/ArcherCaptain';

describe('ArcherCaptain', () => {
  const archerCaptain = new ArcherCaptain();

  test('ArcherCaptain should have correct HP', () => {
    expect(archerCaptain.healthBehavior.getMaxHealth()).toBe(600);
  });
});
