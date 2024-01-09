'use strict';

const grpc = require('@grpc/grpc-js');
const greetingService = require('./src/services/greeting-service');

const { GRPC_PORT } = require('./profiles');

const main = async () => {
  const server = new grpc.Server();

  server.addService(greetingService.serviceName, greetingService.functions);
  server.bindAsync(GRPC_PORT, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('Server running at ' + GRPC_PORT);
  });
};

main();
