import getValueTag from './../getValueTag';

describe('getValueTag', () => {

  it('should return correct string when null is passed', () => {
    expect(getValueTag(null)).toEqual('[object Null]');
  })

  it('should return correct string when undefined is passed', () => {
    expect(getValueTag(undefined)).toEqual('[object Undefined]');
  })

  it('should return correct string when objects are passed', () => {
    expect(getValueTag('test')).toEqual('[object String]');
    expect(getValueTag(123)).toEqual('[object Number]');
    expect(getValueTag(Symbol(1))).toEqual('[object Symbol]');
    expect(getValueTag(new Map())).toEqual('[object Map]');
    expect(getValueTag({ a: 123 })).toEqual('[object Object]');
    expect(getValueTag([ 1 ])).toEqual('[object Array]');
    expect(getValueTag(new Set([1, 2]))).toEqual('[object Set]');
  })

})