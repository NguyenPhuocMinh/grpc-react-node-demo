/**
 * @fileoverview gRPC-Web generated client stub for greeting
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.19.4
// source: proto/greeting.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.greeting = require('./greeting_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.greeting.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.greeting.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.greeting.GreetRequest,
 *   !proto.greeting.GreetResponse>}
 */
const methodDescriptor_Greeter_Greet = new grpc.web.MethodDescriptor(
  '/greeting.Greeter/Greet',
  grpc.web.MethodType.UNARY,
  proto.greeting.GreetRequest,
  proto.greeting.GreetResponse,
  /**
   * @param {!proto.greeting.GreetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.greeting.GreetResponse.deserializeBinary
);


/**
 * @param {!proto.greeting.GreetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.greeting.GreetResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.greeting.GreetResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.greeting.GreeterClient.prototype.greet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/greeting.Greeter/Greet',
      request,
      metadata || {},
      methodDescriptor_Greeter_Greet,
      callback);
};


/**
 * @param {!proto.greeting.GreetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.greeting.GreetResponse>}
 *     Promise that resolves to the response
 */
proto.greeting.GreeterPromiseClient.prototype.greet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/greeting.Greeter/Greet',
      request,
      metadata || {},
      methodDescriptor_Greeter_Greet);
};


module.exports = proto.greeting;

