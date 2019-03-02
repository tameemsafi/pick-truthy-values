# pickTruthyValues

Utility function which removes any falsy values from arrays/objects written in typescript.

## Examples

```js
import { pickTruthyValues } from 'pick-truthy-values'

pickTruthyValues({
  a: null,
  b: undefined,
  c: '',
  e: [],
})

// => {}

pickTruthyValues({
  a: {
    b: [
      { c: null }
    ]
  }
})

// => {}

pickTruthyValues({
  a: {
    b: [
      { c: null },
      { d: 'test' }
    ]
  }
})

// => { a: { b: [ { d: 'test' } ] } } 

```