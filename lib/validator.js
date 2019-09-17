
/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
const isString = input => {
  return typeof input === 'string';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
const isNumber = input => {
  return typeof input === 'number';
};

/**
 * Is this an array?
 * @param input
 * @returns {boolean}
 */
const isArray = input => {
  return Array.isArray(input);
};

/**
 * Is this an object?
 * @param input
 * @returns {boolean}
 */
const isObj = input => {
  return typeof input === 'object' && !Array.isArray(input);
};

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
const isBoolean = input => {
  return typeof input === 'boolean';
};

/**
 * Is this a function?
 * @param input
 * @returns {boolean}
 */
const isFunction = input => {
  return typeof input === 'function';
};

/**
 * Is this an array of strings?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfStrings = array => {
  return array.every(isString);

};

/**
 * Is this an array of numbers?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfNumbers = array => {
  return array.every(isNumber);

};

/**
 * Is this an array of objects?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfObjects = array => {
  return array.every(isObj);

};

/**
 * Is this an array of booleans?
 * @param {array} input 
 * @returns {boolean}
 */
const isArrayOfBooleans = array => {
  return array.every(isBoolean);

};

/**
 * Based on a set of rules, what is correct validator?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param {string} rules
 * @returns {boolean}
 */
const getValidator = (input) => {
  // CHANGE ME
  const validateList = {
    string: isString,
    number: isNumber,
    array: isArray,
    object: isObj,
    boolean: isBoolean,
    function: isFunction,
    strings: isArrayOfStrings,
    numbers: isArrayOfNumbers,
    objects: isArrayOfObjects,
    booleans: isArrayOfBooleans
  }
  return validateList[input];
};


module.exports = {
  isString,
  isNumber,
  isArray,
  isObj,
  isBoolean,
  isFunction,
  // moar types...
  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,
  // moar array types...

  getValidator
};


