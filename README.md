# date-holidays-be

> Provides the official Belgian holidays in NL/FR/DE/EN.

A zero dependency package to get the official Belgian holidays.

## Install

```sh
npm install --save @itenium/date-holidays-be
```

## Use

```js
import { isHoliday, getHolidays } from '@itenium/date-holidays-be';

const holiday: boolean = isHoliday(new Date(2023, 0, 1));
const holidays: Holiday[] = getHolidays(2023);
```

## Typings

```ts
type Holiday = {
  date: Date;
  labels: {
    nl: string;
    fr: string;
    de: string;
    en: string;
  }
}
```

## Motivation

If you just need to calculate something very specific,
importing [`date-holidays`](https://github.com/commenthol/date-holidays)
results in a whopping 10MB dependency.

This turned out to be a performance issue that
came up during our "React Component Profiling"
technical session at itenium.


## Development

```sh
npm install
npm run build

# Run tests
npm t
```

### Publish

[`date-holidays-be` @ npmjs.com](https://www.npmjs.com/package/@itenium/date-holidays-be)

```sh
npm run build
npm login  # username: itenium
npm publish --access public
```
