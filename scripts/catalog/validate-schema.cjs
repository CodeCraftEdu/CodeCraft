'use strict';
const fs = require('node:fs');
const path = require('node:path');
const Ajv2020 = require('ajv/dist/2020');
const ajv = new Ajv2020({ allErrors: true, strict: true, strictRequired: false });
const root = path.resolve(__dirname, '../../schemas');
const read = (name) => JSON.parse(fs.readFileSync(path.join(root, name + '.schema.json'), 'utf8'));
ajv.addSchema(read('content'), 'content.schema.json');
const validators = new Map();
function validateSource(kind, value, filename) {
  if (!validators.has(kind)) validators.set(kind, ajv.compile(read(kind)));
  const validate = validators.get(kind);
  if (!validate(value)) {
    const errors = validate.errors
      .map(
        (error) =>
          (error.instancePath || '/') +
          ' ' +
          error.message +
          (error.params.additionalProperty ? ' (' + error.params.additionalProperty + ')' : ''),
      )
      .join('; ');
    throw new Error(filename + ': invalid ' + kind + ' structure: ' + errors);
  }
}
module.exports = { validateSource };
