import { Unit } from './../game-core/Unit/Unit';
import { ArcherCaptain } from './ArcherCaptain';
import { Archer } from './Archer';

class Units {
  getAllUnits(): Unit[] {
    return [
      new Archer(),
      new ArcherCaptain()
    ];
  }
}

export const units = new Units();
