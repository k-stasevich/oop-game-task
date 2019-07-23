import { unitFactory } from './src/units/UnitFactory';

const archer = unitFactory.createUnit('Archer');

console.log(archer.getName());
