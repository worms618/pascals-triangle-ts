import { validateArgumentRows } from "../src/generator";

describe('Utils', () => {
  describe('Argument validators', () => {
    describe('validateArgumentRows', () => {
      describe('should throw error, when rows is less than zero', () => {
        const errorMessage = 'Argument rows needs to be equal or greater than zero';
        test('rows is minus one', () => {
          expect(() => {
            validateArgumentRows(-1);
          }).toThrow(errorMessage);
        });

        test('rows is Number.MIN_SAFE_INTEGER', () => {
          expect(() => {
            validateArgumentRows(Number.MIN_SAFE_INTEGER);
          }).toThrow(errorMessage);
        });

        test('rows is Number.NEGATIVE_INFINITY', () => {
          expect(() => {
            validateArgumentRows(Number.NEGATIVE_INFINITY);
          }).toThrow(errorMessage);
        });
      });

      describe('Should throw error, when rows is not a integer', () => {
        const errorMessage = 'Argument rows needs to be an integer';
        test('Rows is 0.1', () => {
          expect(() => {
            validateArgumentRows(0.1)
          }).toThrow(errorMessage);
        });

        test('Rows is 0.1111111', () => {
          expect(() => {
            validateArgumentRows(0.1111111)
          }).toThrow(errorMessage);
        });

        test('Rows is NaN', () => {
          expect(() => {
            validateArgumentRows(NaN)
          }).toThrow(errorMessage);
        });

        test('Rows is Number.NaN', () => {
          expect(() => {
            validateArgumentRows(Number.NaN)
          }).toThrow(errorMessage);
        });
      });

      describe('Should throw error, when rows is not a safe integer', () => {
        const errorMessage = 'Argument rows needs to be a safe integer';
        test('Rows is Number.MAX_VALUE', () => {
          expect(() => {
            validateArgumentRows(Number.MAX_VALUE)
          }).toThrow(errorMessage);
        });
      });
    });
  });
});