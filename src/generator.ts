import { validateArgumentRows } from "./utils";

export const CreateAsNumberArray = (rows: number = 0): number[][] => {
  validateArgumentRows(rows);
  const triangle: number[][] = [[1]];

  if (rows > 0) {
    for (let row = 1; row < rows + 1; row++) {
      const previousRow: number[] = triangle[row - 1];
      const nextRow: number[] = CreateNextFromPrevious(previousRow);
      triangle.push(nextRow);
    }
  }

  return triangle;
};

const CreateNextFromPrevious = (previousRow: number[]): number[] => {
  const nextRow: number[] = [];

  nextRow.push(1);
  for (let i = 0; i < previousRow.length - 1; i++) {
    const digitAtIndex: number = previousRow[i];
    const digitAtNextIndex: number = previousRow[i + 1];
    const nextDigit = digitAtIndex + digitAtNextIndex;
    nextRow.push(nextDigit);
  }
  nextRow.push(1);

  return nextRow;
}