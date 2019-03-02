/**
 * Get tag of value
 * - Lodash function
 * 
 * @param value Value to check
 * @returns {String} Tag of value
 */
const getValueTag = (value: any): string => {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return Object.prototype.toString.call(value);
}

export default getValueTag;