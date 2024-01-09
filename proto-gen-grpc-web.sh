#!/bin/bash

echo "Remove proto folder..."
rm -rf ./frontend/src/proto

echo "Create folder proto..."
mkdir -p ./frontend/src/proto

echo "Gen code proto grpc-web..."
protoc -I=. ./proto/*.proto \
  --plugin=protoc-gen-grpc-web=./frontend/node_modules/.bin/protoc-gen-grpc-web \
  --js_out=import_style=commonjs:./frontend/src \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./frontend/src

echo "Gen code proto grpc-web done!"