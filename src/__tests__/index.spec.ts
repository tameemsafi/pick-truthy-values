import pickTruthyValues from './../index'

describe('pickTruthyValues', () => {

  it('should return empty object with 1 level falsy values', function() {
    const objectToTest = {
      name: null,
      phone: '',
      email: undefined,
      address: {},
      codes: [],
    }

     expect(pickTruthyValues(objectToTest)).toEqual({});
  });

  it('should return empty object with deep nested falsy values', () => {
    const objectToTest = {
      name: null,
      phone: '',
      email: undefined,
      codes: [
        {
          item: null,
          numbers: [
            {
              item: null,
              numbers: [
                {
                  item: null,
                  numbers: [],
                },
              ],
            },
          ],
        },
      ],
      address: {
        lineOne: null,
        lineTwo: undefined,
        postcode: '',
      },
      object: {
        object: {
          object: {
            object: {
              name: '',
              code: null,
            },
          },
        },
      },
    }

    expect(pickTruthyValues(objectToTest)).toEqual({});
  })

  it('should return correct truthy values from nested object', () => {
    const objectToTest = {
      name: null,
      phone: '',
      email: undefined,
      codes: [
        {
          item: null,
          numbers: [
            {
              item: null,
              numbers: [
                {
                  item: null,
                  numbers: [1, 2, 3],
                },
              ],
            },
          ],
        },
      ],
      address: {
        lineOne: null,
        lineTwo: undefined,
        postcode: 'SW1',
      },
      object: {
        object: {
          name: 'Test',
          code: null,
        },
      },
    }

     const expected = {
      codes: [
        {
          numbers: [
            {
              numbers: [
                {
                  numbers: [1, 2, 3],
                },
              ],
            },
          ],
        },
      ],
      address: {
        postcode: 'SW1',
      },
      object: {
        object: {
          name: 'Test',
        },
      },
    }

    expect(pickTruthyValues(objectToTest)).toEqual(expected);
  })

  it('should return correct object when has boolean values', () => {
    const objectToTest = {
      test: {
        apple: true,
        orange: false,
      },
      test2: {
        apple: null,
        orange: undefined,
      },
    }

    const expected = {
      test: {
        apple: true,
        orange: false,
      },
    }

    expect(pickTruthyValues(objectToTest)).toEqual(expected)
  })

  it('should return correct empty array when nested array value has been passed', () => {
    const arrayToTest = [ [], [], [[[[[[[]]]]]]] ];
    expect(pickTruthyValues(arrayToTest)).toEqual([]);
  })

  it('should return empty object when object.prototype is passed', () => {
    expect(pickTruthyValues(Object.prototype)).toEqual({});
  })

  it('should return empty object when object with custom prototype is passed', () => {
    const objectPrototype = Object({ a: 1 });
    const objectToTest = Object.create(objectPrototype);
    expect(pickTruthyValues(objectToTest)).toEqual({});
  })

  it('should return empty object when non-objects are passed', function() {
    expect(pickTruthyValues(arguments)).toEqual({});
    expect(pickTruthyValues(Error)).toEqual({});
    expect(pickTruthyValues(Math)).toEqual({});
    expect(pickTruthyValues(undefined)).toEqual({});
    expect(pickTruthyValues('a')).toEqual({});
    expect(pickTruthyValues(Symbol('a'))).toEqual({});
    expect(pickTruthyValues(null)).toEqual({});
  })

})