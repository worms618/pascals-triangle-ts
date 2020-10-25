import { GenericGenerator } from "./generator";

export class AsNumberGenerator extends GenericGenerator<number> {
  constructor() {
    super(1);
  }

  createNextValue(previousValueAtIndex: number, previousValueAtNextIndex: number): number {
    return previousValueAtIndex + previousValueAtNextIndex;
  }
};