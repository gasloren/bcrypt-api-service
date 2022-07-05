const Server = require('./startup/Server');

const server = new Server();

// ----------------------------

test('Path "/bcript/hash/generate" must exits', () => {
  expect(server.routes.hashGenerate.path)
  .toEqual('/bcrypt/hash/generate');
});

test('Path "/bcript/hash/validate" must exits', () => {
  expect(server.routes.hashValidate.path)
  .toEqual('/bcrypt/hash/validate');
});

