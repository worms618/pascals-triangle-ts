import { GenAsNumberArray } from "../src/index";

describe('GenAsNumberArray', () => {
  describe('Call with default argument', () => {
    test('Should not be empty array', () => {
      const rowDefaultArgument = GenAsNumberArray();
      expect(rowDefaultArgument).not.toHaveLength(0);
    });

    test('Should return array with length one', () => {
      const rowDefaultArgument = GenAsNumberArray();
      expect(rowDefaultArgument).toHaveLength(1);
    });

    test('Should return array in array with length one', () => {
      const rowDefaultArgument = GenAsNumberArray();
      const firstElement = rowDefaultArgument[0];
      expect(firstElement).toHaveLength(1);
    });

    test('Element from array in array should be the number one', () => {
      const rowDefaultArgument = GenAsNumberArray();
      const firstArray = rowDefaultArgument[0];
      const firstElemtnFromFirstArray = firstArray[0];

      expect(firstElemtnFromFirstArray).toBe(1);
    });
  });
});