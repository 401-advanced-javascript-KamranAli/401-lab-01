const Schema = require('../lib/Schema');

describe('Schema', () => {

  // add a test schema
  const schema = new Schema({
    name: {
      type: String,
      required: true,
    },
    isBandMemeber: {
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
  
  it('throws on invalid model', () => {
    const queenModel = {
      name: 32,
      bandMember: 'Freddie Mercury',
      yearsActive: true
    };

    const record = schema.validate(queenModel);
    expect(record).not.toEqual(queenModel);
  });

  it('omits empty fields', () => {
    const queenModel = {
      name: 'Freddie Mercury'
    };

    const record = schema.validate(queenModel);

    expect(Object.keys(record.length)).toBe(1);
    expect(record).toEqual(queenModel);
  });
  // more test cases...
});