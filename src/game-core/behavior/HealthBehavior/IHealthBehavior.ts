export interface IWithHealthBehavior {
  healthBehavior: IHealthBehavior;
}

export interface IHealthBehavior {
  currentHealth: number;
  maxHealth: number;

  getCurrentHealth(): number;
  setCurrentHealth(health: number): void;

  getMaxHealth(): number;
  setMaxHealth(health: number): void;
}
