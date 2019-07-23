import { IUnit } from './Unit/IUnit';
import { Unit } from './Unit/Unit';

class UnitFactory {
  createUnit(type: string): IUnit {
    return new Unit('Swordsman');
  }
}
