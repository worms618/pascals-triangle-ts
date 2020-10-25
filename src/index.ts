import {
  AsNumberGenerator,
  AsBigIntGenerator
} from './generator';

export const CreateAsNumbers = (rows: number = 0): number[][] => {
  return new AsNumberGenerator().generate(rows);
};

export const CreateAsBigInt = (rows: number = 0): bigint[][] => {
  return new AsBigIntGenerator().generate(rows);
};