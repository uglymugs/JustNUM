const {
  createServer,
  setConnection,
  addRoutes,
  startServer,
} = require('@matthewglover/hapi-wrapper');

const port = process.env.PORT || 4000;
const connectionOptions = { port };

createServer()
  .then(setConnection(connectionOptions))
  .then(addRoutes())
  .then(startServer)
  .then(server => console.log(`Server running at: ${server.info.uri}`))
  .catch(err => console.log(err));
