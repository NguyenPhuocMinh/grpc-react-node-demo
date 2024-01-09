'use strict';

const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const options = require('../options');

const packageDefinition = (pathName) => {
  // const fileName = path.join(process.cwd(), '../proto', pathName);
  const fileName = process.cwd() + pathName;

  const packageDef = protoLoader.loadSync(fileName, options.protoOptions);
  const protoDescriptor = grpc.loadPackageDefinition(packageDef);

  return protoDescriptor;
};

module.exports = packageDefinition;
