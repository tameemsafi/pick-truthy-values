import isEmpty from './isEmpty';
import isPlainObject from './isPlainObject';

/**
 * Filter an object and remove any falsy values
 * 
 * @param {Object|Array} object Object to filter
 * @returns {Object|Array} Fitltered object without empty values
 * 
 * @author Tameem Safi <tameem@safi.me.uk>
 */
export const pickTruthyValues = (object: any): object | any[] => {
  const isArray = Array.isArray(object);
  const isIterable = isPlainObject(object) || isArray;

  if(!isIterable) {
    return {};
  }

  const items: any[] = isArray ? <any[]>object : Object.keys(object);
  const initalValue: object | any[] = isArray ? [] : {};
  
  return items.reduce(
    (prev: any[] | Object, current) => {
      let value = isArray ? current : object[current]
  
      if (!value && typeof value !== 'boolean') {
        return prev;
      }
  
      if(Array.isArray(value) || isPlainObject(value)) {
        value = pickTruthyValues(value);
  
        if (isEmpty(value)) {
          return prev;
        }
      }
  
      if(Array.isArray(prev)) {
        prev = [...<any[]>prev, value];
      } else {
        prev[current] = value;
      }
  
      return prev;
    },
    initalValue
  );
}

export default pickTruthyValues