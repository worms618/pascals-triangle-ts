import { validateArgumentRows } from "./utils";

export const CreateAsNumberArray = (rows: number = 0): number[][] => {
  validateArgumentRows(rows);

  if (rows === 0)
    return [[1]];
  else if (rows === 1)
    return [[1], [1,1]];
  else
    return [[1], [1,1], [1,2,1]];
};