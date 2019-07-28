import { IUnit } from './IUnit';
import { IArmorBehavior } from './../unit-behavior/ArmorBehavior/IArmorBehavior';
import { ArmorBehavior } from './../unit-behavior/ArmorBehavior/ArmorBehavior';
import { HealthBehavior } from './../unit-behavior/HealthBehavior/HealthBehavior';
import { IHealthBehavior } from './../unit-behavior/HealthBehavior/IHealthBehavior';

export class Unit implements IUnit {
  name: string;

  healthBehavior: IHealthBehavior;
  armorBehavior: IArmorBehavior;

  constructor(name: string, maxHealth: number, armor: number = 0) {
    this.name = name;

    this.healthBehavior = new HealthBehavior(maxHealth);
    this.armorBehavior = new ArmorBehavior(armor);
  }

  getName(): string {
    return this.name;
  }
}
