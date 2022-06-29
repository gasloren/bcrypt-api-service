
const HashGenerate = require('../endpoints/HashGenerate');
const HashValidate = require('../endpoints/HashValidate');

// --------------------------------

class Routes {

  constructor(server) {
    this.hashGenerate = new HashGenerate(server);
    this.hashValidate = new HashValidate(server);
  }

}

module.exports = Routes;
