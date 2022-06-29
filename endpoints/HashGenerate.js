const validApiKey = require('../validators/valid-api-key');
const validCode = require('../validators/valid-code');
const checkErrors = require('../validators/check-errors');

const generateHash = require('../controllers/generate-hash');

// -------------------------------------

class HashGenerate {

  constructor(server) {
    this.path = '/bcrypt/hash/generate';
    this.server = server;
    this.route();
  }

  route() {
    this.server.post(
      this.path,
      [
        ...validApiKey,
        ...validCode,
        checkErrors
      ],
      (req, res) => {
        const { code } = req.body;
        const { hash, error } = generateHash(code);
        if (error) {
          return res.status(400).json({ error });
        }
        res.status(201).json({ hash });
      }
    );
  }

}

module.exports = HashGenerate;
