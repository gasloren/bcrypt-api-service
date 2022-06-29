const bcrypt = require('bcryptjs');

// ------------------------------------------------

const validateHash = (code, hash) => {

  try {

    const valid = !!bcrypt.compareSync(code, hash);

    return { valid };

  } catch(error) {

    return { error };

  }
  
};

// -----------------

module.exports = validateHash;
