const validApiKey = require('../validators/valid-api-key');
const validCode = require('../validators/valid-code');
const validHash = require('../validators/valid-hash');
const checkErrors = require('../validators/check-errors');

const validateHash = require('../controllers/validate-hash');

// -------------------------------------

class HashValidate {

  constructor(server) {
    this.path = '/bcrypt/hash/validate';
    this.server = server;
    this.route();
  }

  route() {
    this.server.post(
      this.path,
      [
        ...validApiKey,
        ...validCode,
        ...validHash,
        checkErrors
      ],
      (req, res) => {
        const { code, hash } = req.body;
        const { valid, error } = validateHash(code, hash);
        if (error) {
          return res.status(400).json({ error });
        }
        res.status(201).json({ valid });
      }
    );
  }

}

module.exports = HashValidate;
