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

  describe('Arguments based on predefined pascals triangle in array of array', () => {
    const pascalsTriangleAsNumberArray = [
      [1],
      [1,  1],
      [1,  2,  1],
      [1,  3,  3,   1],
      [1,  4,  6,   4,   1],
      [1,  5, 10,  10,   5,   1],
      [1,  6, 15,  20,  15,   6,   1],
      [1,  7, 21,  35,  35,  21,   7,   1],
      [1,  8, 28,  56,  70,  56,  28,   8,  1],
      [1,  9, 36,  84, 126, 126,  84,  36,  9,  1],
      [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1]
    ];

    const rowsTestCases = pascalsTriangleAsNumberArray.map((value, index) => index);

    test.each(rowsTestCases)
      ('Argument rows: %i', (rows) => {
        const createPascalsTriangle = CreateAsNumberArray(rows);
        const expectedPascalsTriangle = pascalsTriangleAsNumberArray.slice(0, rows + 1);

        expect(createPascalsTriangle).toEqual(expectedPascalsTriangle);
      })
  });
});