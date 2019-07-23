import { IUnit } from './game-core/Unit/IUnit';
import { Unit } from './game-core/Unit/Unit';

class UnitFactory {
  createUnit(type: string): IUnit {
    return new Unit('Swordsman');
  }
}

export const unitFactory = new UnitFactory();
