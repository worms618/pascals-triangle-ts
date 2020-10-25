import { IGenericGenerator, GenericGenerator } from "../src/generator";

import { firstElevenPascalsTriangleRowsAsNumberArray } from "./data.test";

class TestMockGenerator extends GenericGenerator<number> {
  constructor(private createNextValueCallback: jest.Mock<number, [number, number]>) {
    super(1);
  }

  createNextValue(previousValueAtIndex: number, previousValueAtNextIndex: number): number {
    return this.createNextValueCallback(previousValueAtIndex, previousValueAtNextIndex);
  }
}

describe('Generic generator', () => {
  let addPreviousValues: jest.Mock<number, [number, number]>;
  let mockGenerator: IGenericGenerator<number>;

  beforeEach(() => {
    addPreviousValues = jest.fn((a: number, b: number) => a + b);
    mockGenerator = new TestMockGenerator(addPreviousValues);
  })

  describe('Should throw error, when argument rows is not valid', () => {
    test('Rows is -1', () => {
      expect(() => {
        mockGenerator.generate(-1)
      }).toThrow('Argument rows needs to be equal or greater than zero');
    });

    test('Rows is Number.MIN_SAFE_INTEGER', () => {
      expect(() => {
        mockGenerator.generate(Number.MIN_SAFE_INTEGER)
      }).toThrow('Argument rows needs to be equal or greater than zero');
    });

    test('Rows is 0.1', () => {
      expect(() => {
        mockGenerator.generate(0.1)
      }).toThrow('Argument rows needs to be an integer');
    });

    test('Rows is Number.NaN', () => {
      expect(() => {
        mockGenerator.generate(Number.NaN)
      }).toThrow('Argument rows needs to be an integer');
    });

    test('Rows is Number.MAX_VALUE', () => {
      expect(() => {
        mockGenerator.generate(Number.MAX_VALUE)
      }).toThrow('Argument rows needs to be a safe integer');
    });
  });

  describe('addPreviousValues to be called times', () => {
    test('Argument rows is zero, not to be called', () => {
      mockGenerator.generate(0);
      expect(addPreviousValues).toBeCalledTimes(0);
    });

    test('Argument rows is one, not to be called', () => {
      mockGenerator.generate(1);
      expect(addPreviousValues).toBeCalledTimes(0);
    });

    test('Argument rows is two, to be called one time', () => {
      mockGenerator.generate(2);
      expect(addPreviousValues).toBeCalledTimes(1);
    });

    test('Argument rows is three, to be called two times', () => {
      mockGenerator.generate(3);
      expect(addPreviousValues).toBeCalledTimes(3);
    });

    describe('Argument based on predefined pascals triangle in array of array', () => {
      const rowIndices = firstElevenPascalsTriangleRowsAsNumberArray.map((row, index) => index);
      const rowIndicesWithAddPreviousValuesTimesCalled: number[][] = [
        [0, 0],
        [1, 0],
        [2, 1],
        [3, 3],
        [4, 6],
        [5, 10],
        [6, 15],
        [7, 21],
        [8, 28],
        [9, 36],
        [10, 45]
      ];

      test.each(rowIndices)
        ('AddPreviousValues should no be called for row zero and one, for other rows it should be called. Row: [%i]', (rowIndex) => {
          mockGenerator.generate(rowIndex);

          if (rowIndex > 1)
            expect(addPreviousValues).toBeCalled();
          else
            expect(addPreviousValues).not.toBeCalled();
        });

      test.each(rowIndicesWithAddPreviousValuesTimesCalled)
        ('AddPreviousValues at row [%i] should be called [%i] times', (rowIndex, timesCalled) => {
          mockGenerator.generate(rowIndex);
          expect(addPreviousValues).toBeCalledTimes(timesCalled);
        });
    });
  });
});
