import getValueTag from './getValueTag';
import isPlainObject from './isPlainObject';

const TYPED_ARRAY_REGEX = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)\]$/;

/**
 * Check if value is empty
 * - Lodash function
 * 
 * @param value Value to check
 * @returns {Boolean}
 */
const isEmpty = (value: any): boolean => {
  if(value == null) {
    return true;
  }

  if(
    typeof value !== 'function' &&
    (
      Array.isArray(value) ||
      typeof value === 'string' ||
      typeof value.splice === 'function' ||
      (Buffer && Buffer.isBuffer(value)) ||
      TYPED_ARRAY_REGEX.test(getValueTag(value)) ||
      getValueTag(value) === '[object Arguments]'
    )
  ) {
    return !value.length;
  }

  if(
    getValueTag(value) === '[object Map]' ||
    getValueTag(value) === '[object Set]'
  ) {
    return !value.size;
  }

  if(isPlainObject(value)) {
    return !Object.keys(value).length;
  }

  for(const key in value) {
    if(Object.hasOwnProperty.call(value, key)) {
      return false;
    }
  }

  return true;
}

export default isEmpty;