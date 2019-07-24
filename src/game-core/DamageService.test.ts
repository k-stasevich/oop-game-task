import { ArmorBehavior } from './behavior/ArmorBehavior/ArmorBehavior';
import { HealthBehavior } from './behavior/HealthBehavior/HealthBehavior';
import { AttackBehavior } from './behavior/AttackBehavior/AttackBehavior';
import { DamageService } from './DamageService';
import { Unit } from './Unit/Unit';
import {
  IWithAttackBehavior,
  IAttackBehavior,
} from './behavior/AttackBehavior/IAtackerBehavior';
import {
  IHealthBehavior,
  IWithHealthBehavior,
} from './behavior/HealthBehavior/IHealthBehavior';
import {
  IWithArmorBehavior,
  IArmorBehavior,
} from './behavior/ArmorBehavior/IArmorBehavior';

describe('DamageService', () => {
  test('Unit damage is correct when no armor', () => {
    class Attacker extends Unit implements IWithAttackBehavior {
      attackBehavior: IAttackBehavior;

      constructor() {
        super('Attacker');
        this.attackBehavior = new AttackBehavior(10, 10);
      }
    }

    class Target extends Unit
      implements IWithHealthBehavior, IWithArmorBehavior {
      healthBehavior: IHealthBehavior;
      armorBehavior: IArmorBehavior;

      constructor() {
        super('Target');
        this.healthBehavior = new HealthBehavior(100);
        this.armorBehavior = new ArmorBehavior(0);
      }
    }

    const attacker = new Attacker();
    const target = new Target();
    const damageService = new DamageService();

    damageService.attack(attacker, target);

    expect(target.healthBehavior.getCurrentHealth()).toBe(90);
  });

  // Test damage spread somehow

  // Test damage includes armor
});
