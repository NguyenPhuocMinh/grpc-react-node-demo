## React grpc-client envoy node demo

- [React grpc-client envoy node demo](#react-grpc-client-envoy-node-demo)
- [Clone](#clone)
- [Install](#install)
- [Ex .env](#ex-env)
- [Gen proto grpc-web](#gen-proto-grpc-web)
- [Config envoy proxy](#config-envoy-proxy)
- [Docker compose](#docker-compose)

## Clone

```sh
$ git clone https://github.com/NguyenPhuocMinh/grpc-react-node-demo.git
```

## Install

- **backend**

```sh
$ cd backend && npm install
```

- **frontend**

```sh
$ cd frontend && npm install
```

## Ex .env

- **backend**

  - GRPC_PORT=0.0.0.0:50051

- **frontend**
  - REACT_APP_ENVOY_PROXY_URL=http://localhost:8000

## Gen proto grpc-web

```sh
$ sh ./proto-gen-grpc-web.sh
```

- The proto generate in folder /frontend/src/proto

## Config envoy proxy

- Refer grpc config envoy file [config yaml file](https://github.com/grpc/grpc-web/blob/master/net/grpc/gateway/examples/echo/envoy.yaml)

## Docker compose

- **Build and run docker images**

```sh
$ docker-compose build
$ docker-compose up
```

- **Build and run detach docker images**

```sh
$ docker-compose up -d --build
```

- **Stop docker images**

```sh
$ docker-compose down
```
