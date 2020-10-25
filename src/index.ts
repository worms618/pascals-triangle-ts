import {
  AsNumberGenerator
} from './generators';

export const CreateAsNumbers = (rows: number): number[][] => {
  return new AsNumberGenerator().generate(rows);
};