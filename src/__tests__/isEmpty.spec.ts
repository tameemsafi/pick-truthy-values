import isEmpty from './../isEmpty';

describe('isEmpty', () => {
  
  it('should return `true` when null is passed', () => {
    expect(isEmpty(null)).toEqual(true);
  })

  it('should return `true` when empty map/set is passed', () => {
    expect(isEmpty(new Set())).toEqual(true);
    expect(isEmpty(new Map())).toEqual(true);
  })

  it('should return `false` when non-empty map/set is passed', () => {
    const map = new Map();
    map.set('test', 1);

    expect(isEmpty(map)).toEqual(false);

    const set = new Set();
    set.add(1);

    expect(isEmpty(set)).toEqual(false);
  })

  it('should return `true` when empty object is passed', () => {
    expect(isEmpty({})).toEqual(true);
  })

  it('should return `false` when non-empty object is passed', () => {
    expect(isEmpty({ a: 1 })).toEqual(false);
  })
  
})
