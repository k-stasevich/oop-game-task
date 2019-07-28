import { IWithArmorBehavior } from './../unit-behavior/ArmorBehavior/IArmorBehavior';
import { IWithHealthBehavior } from './../unit-behavior/HealthBehavior/IHealthBehavior';

export interface IUnit extends IWithHealthBehavior, IWithArmorBehavior {
  name: string;

  getName(): string;
}

