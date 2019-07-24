import { IHealthBehavior } from './IHealthBehavior';

export class HealthBehavior implements IHealthBehavior {
  public maxHealth: number;
  public currentHealth: number;

  constructor(maxHealth: number, currentHealth?: number) {
    this.maxHealth = maxHealth;
    this.currentHealth = currentHealth ? currentHealth : maxHealth;
  }

  isDead(): boolean {
    return this.currentHealth <= 0;
  }

  getCurrentHealth() {
    return this.currentHealth;
  }
  setCurrentHealth(health: number) {
    let newHealth = health;
    if (health < 0) newHealth = 0;
    this.currentHealth = newHealth;
  }

  getMaxHealth() {
    return this.maxHealth;
  }
  setMaxHealth(health: number) {
    this.maxHealth = health;
  }
}
