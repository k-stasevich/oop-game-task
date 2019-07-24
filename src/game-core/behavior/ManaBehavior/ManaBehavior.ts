import { IManaBehavior } from './IManaBehavior';

export class ManaBehavior implements IManaBehavior {
  public maxMana: number;
  public currentMana: number;

  constructor(maxMana: number, currentMana?: number) {
    this.maxMana = maxMana;
    this.currentMana = currentMana ? currentMana : maxMana;
  }

  getCurrentMana() {
    return this.currentMana;
  }
  setCurrentMana(mana: number) {
    this.currentMana = mana;
  }

  getMaxMana() {
    return this.maxMana;
  }
  setMaxMana(mana: number) {
    this.maxMana = mana;
  }
}
