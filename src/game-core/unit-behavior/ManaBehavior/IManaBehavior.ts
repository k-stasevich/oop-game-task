import { IUnit } from './../../Unit/IUnit';

export interface IWithManaBehavior {
  manaBehavior: IManaBehavior;
}

export interface ICaster extends IUnit, IWithManaBehavior {}

export interface IManaBehavior {
  currentMana: number;
  maxMana: number;

  getCurrentMana(): number;
  setCurrentMana(mana: number): void;

  getMaxMana(): number;
  setMaxMana(mana: number): void;
}
