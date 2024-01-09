'use strict';

const dotenv = require('dotenv');
dotenv.config();

const GRPC_PORT = process.env.GRPC_PORT;

module.exports = {
  GRPC_PORT,
};
