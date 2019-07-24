import { IDamageTarget } from './../../DamageService';
import { AttackBehavior } from './AttackBehavior';
import { IAttackModifier, IWithAttackBehavior } from './IAttackBehavior';

describe('AttackBehavior', () => {
  test('AttackModifier is applied correct', () => {
    const attackBehavior = new AttackBehavior(10, 20);
    class TestAttackModifier implements IAttackModifier {
      applyAttackModifier(
        damage: number,
        attacker: IWithAttackBehavior,
        target: IDamageTarget,
      ) {
        return 10;
      }
    }
    const testAttackModifier = new TestAttackModifier();

    attackBehavior.addAttackModifier(testAttackModifier);

    expect(attackBehavior.getAttackModifiers().length).toBe(1);
    expect(attackBehavior.getAttackModifiers()[0]).toEqual(testAttackModifier);
  });
});
