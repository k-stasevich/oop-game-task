import { unitFactory } from './src/game-core/units/UnitFactory';

const archer = unitFactory.createUnit('Archer');

console.log(archer.getName());
