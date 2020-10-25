import { AsNumberGenerator } from "../src/generators";

import { firstElevenPascalsTriangleRowsAsNumberArray } from "./data.test";

describe('AsNumberGenerator', () => {
  describe('Arguments: default, one, two', () => {
    describe('Call with default argument', () => {
      let generator: AsNumberGenerator;
      let ptAsNumberArray: number[][];
      let elementAtIndexZero: number[];
      beforeEach(() => {
        generator = new AsNumberGenerator();
        ptAsNumberArray = generator.generate();
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
      let generator: AsNumberGenerator;
      let ptAsNumberArray: number[][];
      let elementAtIndexZero: number[];
      let elementAtIndexOne: number[];
      beforeEach(() => {
        generator = new AsNumberGenerator();
        ptAsNumberArray = generator.generate(1);
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
      let generator: AsNumberGenerator;
      let ptAsNumberArray: number[][];
      let elementAtIndexZero: number[];
      let elementAtIndexOne: number[];
      let elementAtIndexTwo: number[];
      beforeEach(() => {
        generator = new AsNumberGenerator();
        ptAsNumberArray = generator.generate(2);
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

  describe('Arguments based on predefined pascals triangle', () => {
    const pascalsTriangle: number[][] = firstElevenPascalsTriangleRowsAsNumberArray;
    const rowIndices: number[] = pascalsTriangle.map((value, index) => index);
    let generator: AsNumberGenerator;
    beforeEach(() => {
      generator = new AsNumberGenerator();
    });

    test.each(rowIndices)
      ('Argument rows: %i', (rows) => {
        const createPascalsTriangle = generator.generate(rows);
        const expectedPascalsTriangle = pascalsTriangle.slice(0, rows + 1);

        expect(createPascalsTriangle).toEqual(expectedPascalsTriangle);
      })
  });
});