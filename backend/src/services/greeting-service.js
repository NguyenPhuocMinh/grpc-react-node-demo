'use strict';

const packageDefinition = require('../core/common/package-definition');

const protoDescriptor = packageDefinition('/greeting.proto');

const sayHello = (call, callback) => {
  console.log('🚀 ~ file: greeting-service.js:8 ~ sayHello ~ call:', call.request);
  callback(null, { message: 'Hello ' + call.request.name + '!' });
};

module.exports = {
  serviceName: protoDescriptor.greeting.Greeter.service,
  functions: {
    greet: sayHello,
  },
};
