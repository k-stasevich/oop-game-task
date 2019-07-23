import { Skeleton } from '../src/units/units/Skeleton';

describe('Skeleton', () => {
  const skeleton = new Skeleton();

  test('Skeleton should have correct HP', () => {
    expect(skeleton.healthBehavior.getMaxHealth()).toBe(180);
  });
});
