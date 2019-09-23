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

// /**
//  * Is this a date?
//  * @param input
//  * @returns {boolean}
//  */
// const isDate = input => {
//   return typeof input === 'object';
// };

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
  };
  return validateList[input];
};

class CoerceError extends Error {
  constructor() {
    super('Cannot coerce type');
  }
}

const castString = (input) => {
  if(isObj(input) || isArray(input)) {
    throw new CoerceError(input);
  } else {
    return String(input);
  }
};

const castNumber = (input) => {
  if(isNumber(input)) {
    return Number(input);
  } else if(isString(input)) {
    if(input.match(/[0-9]/)) {
      return Number(input);
    } else {
      throw new CoerceError(input);
    }
  } else {
    throw new CoerceError(input);
  }
};

const castBool = (input) => {
  if(isBoolean(input)) {
    return Boolean(input);
  } else if(isString(input)) {
    if(input === 'true') {
      return true;
    } else if(input === 'false') {
      return false;
    } else {
      throw new CoerceError('need a true or false input');
    }
  } else if(isNumber(input)) {
    if(input === 1 || input === 0) {
      return Boolean(input);
    } else {
      throw new CoerceError('need a true or false input');
    }
  } else {
    throw new CoerceError('need a true or false input');
  }
};

// const castDate = (input) => {
//   if(typeof input === 'object' && String(input).match(/\w{4}[Time)]$/)
//   ) {
//     console.log(isDate(input));
//     return input;
//   } else {
//     throw new CoerceError('cannot coerce');
//   }
// };

const getCaster = (rules) => {
  if(rules === String) {
    return castString;
  } else if(rules === Number) {
    return castNumber;
  } else if(rules === Boolean) {
    return castBool;
  }
  // } else if(rules === Date) {
  //   return castDate;
  // }
};

module.exports = {
  isString,
  isNumber,
  isArray,
  isObj,
  isBoolean,
  isFunction,
  // isDate,
  // moar types...
  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  isArrayOfBooleans,
  // moar array types...
  getValidator,
  castString,
  castNumber,
  castBool,
  // castDate,
  getCaster
};