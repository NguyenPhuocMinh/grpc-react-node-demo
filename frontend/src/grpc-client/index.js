import { GreeterClient } from '../proto/greeting_grpc_web_pb';

const envoyProxyURL = process.env.REACT_APP_ENVOY_PROXY_URL;

const greeterClient = new GreeterClient(envoyProxyURL, null, null);

export { greeterClient };
