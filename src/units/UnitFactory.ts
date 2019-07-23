import { Unit } from '../game-core/Unit/Unit';
import { Archer } from './units/Archer';
import { ArcherCaptain } from './units/ArcherCaptain';
import { Paladin } from './units/Paladin';
import { Skeleton } from './units/Skeleton';
import { Swordsman } from './units/Swordsman';

export enum UnitEnum {
  Archer,
  ArcherCaptain,
  Paladin,
  Skeleton,
  Swordsman,
}

export type UnitTypeStrings = keyof typeof UnitEnum;

class UnitFactory {
  createUnit(type: UnitTypeStrings): Unit {
    if (type === 'Archer') {
      return new Archer();
    } else if (type === 'ArcherCaptain') {
      return new ArcherCaptain();
    } else if (type === 'Paladin') {
      return new Paladin();
    } else if (type === 'Skeleton') {
      return new Skeleton();
    } else if (type === 'Swordsman') {
      return new Swordsman();
    }
  }
}

export const unitFactory = new UnitFactory();
