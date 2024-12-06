const app = require('./app');
const serverless = require('serverless-http');

if (process.env.AWS_EXECUTION_ENV) {
  // On est dans Lambda
  module.exports.handler = serverless(app);
} else {
  // Local
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Serveur local démarré sur http://localhost:${PORT}`);
  });
}
