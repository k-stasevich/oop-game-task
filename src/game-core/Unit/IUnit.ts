import { IHealthBehavior } from './../behavior/HealthBehavior/IHealthBehavior';

export interface IUnit {
  name: string;
  healthBehavior: IHealthBehavior;

  getName(): string;
}
