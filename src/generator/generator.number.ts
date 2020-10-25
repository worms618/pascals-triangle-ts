import { GenericGenerator } from "./generator.generic";

export class AsNumberGenerator extends GenericGenerator<number> {
  constructor() {
    super(1);
  }

  createNextValue(previousValueAtIndex: number, previousValueAtNextIndex: number): number {
    return previousValueAtIndex + previousValueAtNextIndex;
  }
};