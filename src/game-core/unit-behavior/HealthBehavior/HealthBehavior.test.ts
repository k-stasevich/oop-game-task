import { HealthBehavior } from './HealthBehavior';
describe('HealthBehavior', () => {
  test('Unit is dead when currentHealth equal to 0', () => {
    const healthBehavior = new HealthBehavior(100);
    healthBehavior.setCurrentHealth(0);

    expect(healthBehavior.isDead()).toBe(true);
  });

  test('Unit is not dead when currentHealth more than 0', () => {
    const healthBehavior = new HealthBehavior(100);
    healthBehavior.setCurrentHealth(100);

    expect(healthBehavior.isDead()).toBe(false);
  });
});
