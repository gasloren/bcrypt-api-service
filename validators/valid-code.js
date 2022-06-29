const { body } = require('express-validator');

// -----------------------------------------

const validCode = [
  body('code').exists(),
  body('code').isString(),
  body('code').notEmpty()
];

module.exports = validCode;