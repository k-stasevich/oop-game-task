import { IHealthBehavior } from './IHealthBehavior';

export class HealthBehavior implements IHealthBehavior {
  public maxHealth: number;
  public currentHealth: number;

  constructor(maxHealth: number, currentHealth?: number) {
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth ? currentHealth : maxHealth;
  }

  getCurrentHealth() {
    return this.currentHealth;
  }
  setCurrentHealth(health: number) {
    this.currentHealth = health;
  }

  getMaxHealth() {
    return this.maxHealth;
  }
  setMaxHealth(health: number) {
    this.maxHealth = health;
  }
}
