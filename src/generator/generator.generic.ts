import { IGenericGenerator } from "./generator.interface";

import { validateArgumentRows } from "../utils";

export abstract class GenericGenerator<T> implements IGenericGenerator<T> {
  constructor(protected rowZeroValue: T) {
  }

  generate(rows: number = 0): T[][] {
    validateArgumentRows(rows);

    const rowWithRows: T[][] = [[this.rowZeroValue]];

    if (rows > 0) {
      for (let row = 1; row < rows + 1; row++) {
        const previousRow: T[] = rowWithRows[row - 1];
        const nextRow: T[] = this.generateNextFromPrevious(previousRow);
        rowWithRows.push(nextRow);
      }
    }

    return rowWithRows;
  }

  private generateNextFromPrevious(previousRow: T[]): T[] {
    const nextRow: T[] = [];

    nextRow.push(this.rowZeroValue);
    for (let i = 0; i < previousRow.length - 1; i++) {
      const previousValueAtIndex: T = previousRow[i];
      const previousValueAtNextIndex: T = previousRow[i + 1];
      const nextValue = this.createNextValue(previousValueAtIndex, previousValueAtNextIndex);
      nextRow.push(nextValue);
    }
    nextRow.push(this.rowZeroValue);

    return nextRow;
  };

  abstract createNextValue(previousValueAtIndex: T, previousValueAtNextIndex: T): T;
}