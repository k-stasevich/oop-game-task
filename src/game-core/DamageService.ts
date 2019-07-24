import { RandomHelper } from '../helpers/RandomHelper';
import { IWithAttackBehavior } from './behavior/AttackBehavior/IAtackerBehavior';
import { IWithHealthBehavior } from './behavior/HealthBehavior/IHealthBehavior';
import { IWithArmorBehavior } from './behavior/ArmorBehavior/IArmorBehavior';

interface ITarget extends IWithHealthBehavior, IWithArmorBehavior {}

export class DamageService {
  /**
   * @returns {number} - target health after attack
   */
  attack(attacker: IWithAttackBehavior, target: ITarget): void {
    const targetHealth = target.healthBehavior.getCurrentHealth();
    const damage = this.getDamage(
      attacker.attackBehavior.getMinDamage(),
      attacker.attackBehavior.getMaxDamage(),
    );
    const targetNewHealth = targetHealth - damage;

    target.healthBehavior.setCurrentHealth(targetNewHealth);
  }

  private getDamage(minDamage: number, maxDamage: number): number {
    return RandomHelper.getRandomNumber(minDamage, maxDamage);
  }
}
