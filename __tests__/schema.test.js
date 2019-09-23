const Schema = require('../lib/schema');
const errors = require('../lib/Errors');
const validator = require('../lib/validator');

describe('Schema', () => {

  // add a test schema
  const schema = new Schema({
    name: {
      type: String,
      required: true,
    },
    isBandMember: {
      type: Boolean,
      required: false
    },
    yearsActive: {
      type: Number,
      required: true
    }
  });

  it('validates a correct model', () => {
    const queenModel = {
      name: 'Freddie Mercury',
      bandMember: true,
      yearsActive: 32
    };

    const record = schema.validate(queenModel);
    
    expect(record).toEqual(queenModel);
  });

  it('throws an invalid model', () => {
    const queenModel = {
      name: 32,
      bandMember: 'Freddie Mercury',
      yearsActive: true
    };

  // more test cases...

    const record = () => schema.validate(queenModel);
    expect(record).not.toEqual(queenModel);
  });

  it('omits empty fields', () => {
    const queenModel = {
      name: 'Freddie Mercury',
      yearsActive: 32
    };

    const record = schema.validate(queenModel);

    expect(Object.keys(record).length).toBe(2);
    expect(record).toEqual(queenModel);
  });

  it('coerces model types', () => {
    const queenModel = {
      name: 'Freddie Mercury',
      yearsActive: '32'
    };

    const record = schema.validate(queenModel);

    expect(record).toEqual({
      name: 'Freddie Mercury',
      yearsActive: '32'
    });
  });

  it(`if fields missing, throws model error`, () => {
    const model = {};

    expect(() => {
      schema.validate(model);
    }).toThrow(errors.ModelError);
  });

  it(`throws model error on uncastable`, () => {
    const model = {
      name: 'Freddie Mercury',
      yearsActive: 'xyz'
    };

    expect(() => {
      schema.validate(model);
    }).toThrow(validator.CoerceError);
  });
});