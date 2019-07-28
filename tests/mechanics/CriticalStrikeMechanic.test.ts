import { AttackBehavior } from './../../src/game-core/unit-behavior/AttackBehavior/AttackBehavior';
import { IAttackBehavior } from './../../src/game-core/unit-behavior/AttackBehavior/IAttackBehavior';
import { Unit } from './../../src/game-core/Unit/Unit';
import { IWithAttackBehavior } from '../../src/game-core/unit-behavior/AttackBehavior/IAttackBehavior';
describe('CriticalStrikeMechanic', () => {
  test('Critical strike is working correct', () => {
    class TestUnit extends Unit implements IWithAttackBehavior {
      attackBehavior: IAttackBehavior;

      constructor() {
        super('TestUnit', 100);
        this.attackBehavior = new AttackBehavior(10, 10);
      }
    }
  });
});
