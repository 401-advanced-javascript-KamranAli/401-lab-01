
class CastError extends Error {
  constructor(expectedType, providedValue) {
    super(`cannot cast ${providedValue} of ${expectedType}`);
    this.expectedType = expectedType;
    this.providedValue = providedValue;
  }
}

class ModelError extends Error {
  constructor(schemaErrors){
    super(`Model has Schema errors:\n` + schemaErrors.join('\n'));
    this.schemaErrors = schemaErrors;
  }
}

module.exports = {
  CastError,
  ModelError
};