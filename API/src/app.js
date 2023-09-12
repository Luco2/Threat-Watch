const fastify = require('fastify')({ logger: true });

// Import routes
const newsRoutes = require('./routes/newsRoutes');
const userRoutes = require('./routes/userRoutes');

// Register routes
fastify.register(newsRoutes);
fastify.register(userRoutes);

// Start server
fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
