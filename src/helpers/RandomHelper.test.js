import { RandomHelper } from './RandomHelper';

describe('RandomHelper', () => {
  let arr = [];

  test('should generate all options', () => {
    const length = 11;
    const min = 0;
    const max = 10;

    for (let i = 0; i < 1000; i++) {
      const random = RandomHelper.getRandomNumber(min, max);

      if (typeof arr[random] === 'number') {
        arr[random] += 1;
      } else {
        arr[random] = 0;
      }
    }

    const arrayLengthIsCorrect = arr.length === length;
    expect(arrayLengthIsCorrect).toBe(true);
  });
});
