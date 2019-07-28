import { AttackBehavior } from './unit-behavior/AttackBehavior/AttackBehavior';
import { DamageService } from './DamageService';
import { Unit } from './Unit/Unit';
import {
  IWithAttackBehavior,
  IAttackBehavior,
} from './unit-behavior/AttackBehavior/IAttackBehavior';
import {
  IHealthBehavior,
  IWithHealthBehavior,
} from './unit-behavior/HealthBehavior/IHealthBehavior';

describe('DamageService', () => {
  class Attacker extends Unit implements IWithAttackBehavior {
    attackBehavior: IAttackBehavior;

    constructor() {
      super('Attacker', 100);
      this.attackBehavior = new AttackBehavior(10, 10);
    }
  }

  class Target extends Unit {
    constructor() {
      super('Target', 100, 0);
    }
  }

  test('Should decrease HP of unit when it is attacked. No armor', () => {
    const attacker = new Attacker();
    attacker.attackBehavior.setMinDamage(10);
    attacker.attackBehavior.setMaxDamage(10);

    const target = new Target();
    target.armorBehavior.setArmor(0);
    target.healthBehavior.setMaxHealth(100);
    target.healthBehavior.setCurrentHealth(100);

    const damageService = new DamageService();

    damageService.attack(attacker, target);

    expect(target.healthBehavior.getCurrentHealth()).toBe(90);
  });

  test('Should decrease HP of unit when it is attacked. With armor', () => {
    const attacker = new Attacker();
    attacker.attackBehavior.setMinDamage(10);
    attacker.attackBehavior.setMaxDamage(10);

    const target = new Target();
    target.armorBehavior.setArmor(5);
    target.healthBehavior.setMaxHealth(100);
    target.healthBehavior.setCurrentHealth(100);

    const damageService = new DamageService();

    damageService.attack(attacker, target);

    expect(target.healthBehavior.getCurrentHealth()).toBe(95);
  });

  test('Should not change HP of unit if target`s armor is equal to attacker`s damage', () => {
    const attacker = new Attacker();
    attacker.attackBehavior.setMinDamage(10);
    attacker.attackBehavior.setMaxDamage(10);

    const target = new Target();
    target.armorBehavior.setArmor(10);
    target.healthBehavior.setMaxHealth(100);
    target.healthBehavior.setCurrentHealth(50);

    const damageService = new DamageService();

    damageService.attack(attacker, target);

    expect(target.healthBehavior.getCurrentHealth()).toBe(50);
  });

  test('Should not change HP of unit if target`s armor more than to attacker`s damage', () => {
    const attacker = new Attacker();
    attacker.attackBehavior.setMinDamage(10);
    attacker.attackBehavior.setMaxDamage(10);

    const target = new Target();
    target.armorBehavior.setArmor(100);
    target.healthBehavior.setMaxHealth(100);
    target.healthBehavior.setCurrentHealth(50);

    const damageService = new DamageService();

    damageService.attack(attacker, target);

    expect(target.healthBehavior.getCurrentHealth()).toBe(50);
  });
});
