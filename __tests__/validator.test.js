const validator = require('../lib/validator.js');

describe('validator module', () => {
  
  const str = 'yes';
  const num = 1;
  const arr = ['a'];
  const obj = { x: 'y' };
  const func = () => {};
  const bool = false;

  describe('performs basic validation of', () => {

    it('strings', () => {
      expect(validator.isString(str)).toBeTruthy();
      expect(validator.isString(num)).toBeFalsy();
      expect(validator.isString(arr)).toBeFalsy();
      expect(validator.isString(obj)).toBeFalsy();
      expect(validator.isString(func)).toBeFalsy();
      expect(validator.isString(bool)).toBeFalsy();
    });

    it('numbers', () => {
      expect(validator.isNumber(str)).toBeFalsy();
      expect(validator.isNumber(num)).toBeTruthy();
      expect(validator.isNumber(arr)).toBeFalsy();
      expect(validator.isNumber(obj)).toBeFalsy();
      expect(validator.isNumber(func)).toBeFalsy();
      expect(validator.isNumber(bool)).toBeFalsy();
    });

    it('arrays', () => {
      expect(validator.isArray(str)).toBeFalsy();
      expect(validator.isArray(num)).toBeFalsy();
      expect(validator.isArray(arr)).toBeTruthy();
      expect(validator.isArray(obj)).toBeFalsy();
      expect(validator.isArray(func)).toBeFalsy();
      expect(validator.isArray(bool)).toBeFalsy();
    });

    it.skip('objects', () => {
      
    });

    it.skip('booleans', () => {
      
    });

    it.skip('functions', () => {
      
    });
  });

  describe('performs array validation of', () => {

    const arrayOfStrings = ['a', 'b', 'c'];
    const arrayOfNumbers = [1, 2, 3];
    const arrayOfObjects = [{}, {}, {}];
    const arrayOfBooleans = [true, false, true];

    it.skip('strings', () => {
      expect(validator.isArrayOfStrings(arrayOfStrings)).toBeTruthy();
      expect(validator.isArrayOfStrings(arrayOfNumbers)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfObjects)).toBeFalsy();
      expect(validator.isArrayOfStrings(arrayOfBooleans)).toBeFalsy();
    });

    it.skip('numbers', () => {

    });

    it.skip('objects', () => {
    
    });

    it.skip('booleans', () => {
    
    });
  });

  describe('get validator for', () => {

    it('strings', () => {
      // TODO: pass getValidator the rules
      expect(validator.getValidator(/* rules */)).toBe(validator.isString);
    });
    
    it.skip('numbers', () => {
      
    });

    it.skip('arrays', () => {
      
    });

    it.skip('objects', () => {
      
    });

    it.skip('booleans', () => {
      
    });

    it.skip('functions', () => {
      
    });

    it.skip('array of strings', () => {
      
    });

    it.skip('array of numbers', () => {
      
    });

    it.skip('array of objects', () => {
      
    });

    it.skip('array of booleans', () => {
      
    });

  });
});