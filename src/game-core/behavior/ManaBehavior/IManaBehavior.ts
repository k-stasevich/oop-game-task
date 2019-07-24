export interface IWithManaBehavior {
  manaBehavior: IManaBehavior;
}

export interface IManaBehavior {
  currentMana: number;
  maxMana: number;

  getCurrentMana(): number;
  setCurrentMana(mana: number): void;

  getCurrentMana(): number;
  setCurrentMana(mana: number): void;
}
