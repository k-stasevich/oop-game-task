import { IArmorBehavior } from './IArmorBehavior';

export class ArmorBehavior implements IArmorBehavior {
  constructor(public armor: number) {}

  getArmor(): number {
    return this.armor;
  }
}
