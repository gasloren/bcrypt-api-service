const bcrypt = require('bcryptjs');

// ------------------------------------------------

const generateHash = (code) => {

  try {

    const salt = bcrypt.genSaltSync(10);

    const hash = bcrypt.hashSync(code, salt);

    return { hash };

  } catch(error) {

    return { error };

  }

};

// -----------------

module.exports = generateHash;
