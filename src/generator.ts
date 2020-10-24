export const CreateAsNumberArray = (rows: number = 0): number[][] => {
  if (rows === 0)
    return [[1]];
  else
    return [[1], [1,1]];
};