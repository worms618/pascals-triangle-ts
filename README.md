# pascals-triangle-ts

> A package to generate pascals triangle in multiple ways

## Install

```bash
npm install --save pascals-triangle-ts
```

## Usages

```js
import {CreateAsNumbers, CreateAsBigInt} from 'pascals-triangle-ts';

CreateAsNumbers(1); // [ [ 1 ] ]
CreateAsNumbers(2); // [ [ 1 ], [ 1, 1 ] ]
CreateAsNumbers(3); // [ [ 1 ], [ 1, 1 ], [ 1, 2, 1] ]

CreateAsBigInt(1); // [ [ '1' ] ]
CreateAsBigInt(2); // [ [ '1' ], [ '1', '1' ] ]
CreateAsBigInt(3); // [ [ '1' ], [ '1', '1' ], [ '1', '2', '1' ] ]
```

## API

### CreateAsNumbers(rows: number = 0): number[][]

Return a maxtrix (`array` of `array's`) containing the values as `integers` of the rows in order from top to bottom.

#### rows

Type: `number`
Default: `0`

- Zero-based
-- if you want to generate the first level you should pass in `0`
- Greater than or equal to `0`
- Less than `57`
-- Row 57 and rows after will calculate an integer values greater than [safe maximum integer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). It is not wise to calculate futher with that value
-- If the required rows is greater than or equal to 57, you should use `CreateAsBigInt`

### CreateAsBigInt = (rows: number = 0): bigint[][]

Return a maxtrix (`array` of `array's`) containing the values as bigint's of the rows in order from top to bottom.

#### rows

Type: `number`
Default: `0`

- Zero-based
-- if you want to generate the first level you should pass in `0`
- Greater than or equal to `0`

## Test

Clone repo, open prompt in repo directory and run following commands:

```bash
npm install
npm test
```

## License

MIT © Remco Vorthoren
