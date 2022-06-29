const { body } = require('express-validator');

// -----------------------------------------

const validHash = [
  body('hash').exists(),
  body('hash').isString(),
  body('hash').notEmpty()
];

module.exports = validHash;