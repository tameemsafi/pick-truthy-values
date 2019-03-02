import getValueTag from './getValueTag';

/**
 * Check if value is a plain object
 * - Lodash function
 * 
 * @param value Value to check
 * @returns {Boolean}
 * @see Lodash
 */
const isPlainObject = (value: any): boolean => {
  if(
    !(typeof value == 'object' && value !== null) ||
    getValueTag(value) != '[object Object]'
  ) {
    return false;
  }

  if(Object.getPrototypeOf(value) === null) {
    return true;
  }

  let temp = value;

  while(Object.getPrototypeOf(temp) !== null) {
    temp = Object.getPrototypeOf(temp);
  }

  return Object.getPrototypeOf(value) === temp;
}

export default isPlainObject;