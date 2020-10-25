export const validateArgumentRows = (rows: number): void => {
  if (rows < 0)
    throw new Error('Argument rows needs to be equal or greater than zero');

  if (!Number.isInteger(rows))
    throw new Error('Argument rows needs to be an integer');

  if (!Number.isSafeInteger(rows))
    throw new Error('Argument rows needs to be a safe integer');
}