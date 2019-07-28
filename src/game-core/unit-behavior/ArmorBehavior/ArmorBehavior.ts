import { IArmorBehavior } from './IArmorBehavior';

export class ArmorBehavior implements IArmorBehavior {
  constructor(public armor: number) {}

  getArmor(): number {
    return this.armor;
  }
  setArmor(armor: number): void {
    this.armor = armor;
  }
}
