export interface IHealthBehavior {
  currentHealth: number;
  maxHealth: number;

  getCurrentHealth(): number;
  setCurrentHealth(health: number): void;

  setMaxHealth(health: number): void;
  getMaxHealth(): number;
}
