## Backend

- [Backend](#backend)
- [Install](#install)
- [Run on Local](#run-on-local)
- [Run on Docker](#run-on-docker)

## Install

```sh
$ npm install
```

## Run on Local

```sh
$ node server.js
```

## Run on Docker

- **Run and Build Docker Images**

  ```sh
  $ docker build -t minhnguyen55/backend:v1.0.0 .
  ```

  ```sh
  $ docker run -d -p 50051:50051 backend:<version>
  ```
