import { RandomHelper } from '../helpers/RandomHelper';
import { IWithAttackBehavior } from './behavior/AttackBehavior/IAttackBehavior';
import { IWithHealthBehavior } from './behavior/HealthBehavior/IHealthBehavior';
import { IWithArmorBehavior } from './behavior/ArmorBehavior/IArmorBehavior';

/**
 * Interface of unit that can receive damage (in other words - unit that can be attacked)
 */
export interface IDamageTarget
  extends IWithHealthBehavior,
    IWithArmorBehavior {}

export class DamageService {
  /**
   * @returns {number} - target health after attack
   */
  attack(attacker: IWithAttackBehavior, target: IDamageTarget): void {
    // getting damage from spread;
    let damage = this.getDamage(
      attacker.attackBehavior.getMinDamage(),
      attacker.attackBehavior.getMaxDamage(),
    );

    // apply attack modifiers
    const attackModifiers = attacker.attackBehavior.getAttackModifiers();
    attackModifiers.forEach(modifier => {
      damage = modifier.applyAttackModifier(damage, attacker, target);
    });

    // armor influence
    const armor = target.armorBehavior.getArmor();
    damage = damage - armor;
    if (damage < 0) damage = 0;

    // update target`s current health
    const targetHealth = target.healthBehavior.getCurrentHealth();
    const targetNewHealth = targetHealth - damage;
    target.healthBehavior.setCurrentHealth(targetNewHealth);
  }

  private getDamage(minDamage: number, maxDamage: number): number {
    return RandomHelper.getRandomNumber(minDamage, maxDamage);
  }
}
