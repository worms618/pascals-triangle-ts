export interface IGenericGenerator<T> {
  generate(rows: number): T[][];
};