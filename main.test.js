const Server = require('./startup/Server');

const server = new Server();

// ----------------------------

test('Route path --> "/bcript/hash/generate" must exits', () => {
  expect(server.routes.hashGenerate.path)
  .toEqual('/bcrypt/hash/generate');
});

test('Route path --> "/bcript/hash/validate" must exits', () => {
  expect(server.routes.hashValidate.path)
  .toEqual('/bcrypt/hash/validate');
});

