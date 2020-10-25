import { CreateAsNumberArray } from "../src/generator";

describe('CreateAsNumberArray', () => {
  describe('Should throw error, when argument rows is not valid', () => {
    test('Rows is -1', () => {
      expect(() => {
        CreateAsNumberArray(-1)
      }).toThrow('Argument rows needs to be equal or greater than zero');
    });

    test('Rows is Number.MIN_SAFE_INTEGER', () => {
      expect(() => {
        CreateAsNumberArray(Number.MIN_SAFE_INTEGER)
      }).toThrow('Argument rows needs to be equal or greater than zero');
    });

    test('Rows is 0.1', () => {
      expect(() => {
        CreateAsNumberArray(0.1)
      }).toThrow('Argument rows needs to be an integer');
    });

    test('Rows is Number.NaN', () => {
      expect(() => {
        CreateAsNumberArray(Number.NaN)
      }).toThrow('Argument rows needs to be an integer');
    });

    test('Rows is Number.MAX_VALUE', () => {
      expect(() => {
        CreateAsNumberArray(Number.MAX_VALUE)
      }).toThrow('Argument rows needs to be a safe integer');
    });
  });

  describe('Arguments: default, one, two', () => {
    describe('Call with default argument', () => {
      let ptAsNumberArray: number[][];
      let elementAtIndexZero: number[];
      beforeEach(() => {
        ptAsNumberArray = CreateAsNumberArray();
        elementAtIndexZero = ptAsNumberArray[0];
      });

      test('Should not return empty array', () => {
        expect(ptAsNumberArray).not.toHaveLength(0);
      });

      test('Should return array with length one', () => {
        expect(ptAsNumberArray).toHaveLength(1);
      });

      test('Element at index zero, should have a length of one', () => {
        expect(elementAtIndexZero).toHaveLength(1);
      });

      test('Element at index zero, should be array with number one', () => {
        expect(elementAtIndexZero).toEqual([1]);
      });
    });

    describe('Call with number one as argument', () => {
      let ptAsNumberArray: number[][];
      let elementAtIndexZero: number[];
      let elementAtIndexOne: number[];
      beforeEach(() => {
        ptAsNumberArray = CreateAsNumberArray(1);
        elementAtIndexZero = ptAsNumberArray[0];
        elementAtIndexOne = ptAsNumberArray[1];
      });

      test('Should not be an empty array', () => {
        expect(ptAsNumberArray).not.toHaveLength(0);
      });

      test('Should return array with length two', () => {
        expect(ptAsNumberArray).toHaveLength(2);
      });

      test('Element at index zero should have a length of one', () => {
        expect(elementAtIndexZero).toHaveLength(1);
      });

      test('Element at index one should have a length of two', () => {
        expect(elementAtIndexOne).toHaveLength(2);
      });

      test('Element at index zero should be array with number one', () => {
        expect(elementAtIndexZero).toEqual([1]);
      });

      test('Element at index one should be array with two ones', () => {
        expect(elementAtIndexOne).toEqual([1, 1]);
      });
    });

    describe('Call with number two as argument', () => {
      let ptAsNumberArray: number[][];
      let elementAtIndexZero: number[];
      let elementAtIndexOne: number[];
      let elementAtIndexTwo: number[];
      beforeEach(() => {
        ptAsNumberArray = CreateAsNumberArray(2);
        elementAtIndexZero = ptAsNumberArray[0];
        elementAtIndexOne = ptAsNumberArray[1];
        elementAtIndexTwo = ptAsNumberArray[2];
      });

      test('Should not be an empty array', () => {
        expect(ptAsNumberArray).not.toHaveLength(0);
      });

      test('Should return array with length three', () => {
        expect(ptAsNumberArray).toHaveLength(3);
      });

      test('Element at index zero should have a length of one', () => {
        expect(elementAtIndexZero).toHaveLength(1);
      });

      test('Element at index one should have a length of two', () => {
        expect(elementAtIndexOne).toHaveLength(2);
      });

      test('Element at index two should have a length of three', () => {
        expect(elementAtIndexTwo).toHaveLength(3);
      });

      test('Element at index zero should be array with number one', () => {
        expect(elementAtIndexZero).toEqual([1]);
      });

      test('Element at index one should be array with two ones', () => {
        expect(elementAtIndexOne).toEqual([1, 1]);
      });

      test('Element at index two should be array with numbers one, two and one in that order', () => {
        expect(elementAtIndexTwo).toEqual([1, 2, 1]);
      });
    });
  });
});