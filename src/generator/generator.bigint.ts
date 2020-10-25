import { GenericGenerator } from "./generator.generic";

export class AsBigIntGenerator extends GenericGenerator<bigint> {
  constructor() {
    super(BigInt(1));
  }

  createNextValue(previousValueAtIndex: bigint, previousValueAtNextIndex: bigint): bigint {
    return previousValueAtIndex + previousValueAtNextIndex;
  }
};