export class RandomHelper {
  static getRandomNumber(min: number, max: number): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  static chance(chance: number): boolean {
    const errorMessage = 'chance can be from 0 to 100';

    if (chance < 0 || chance > 100) {
      throw new Error(errorMessage);
    }

    const randomNumber = this.getRandomNumber(1, 100);

    return randomNumber <= chance;
  }
}
