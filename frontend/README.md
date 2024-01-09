## Frontend

- [Frontend](#frontend)
- [Install](#install)
- [Run on Local](#run-on-local)
- [Run on Docker](#run-on-docker)

## Install

```sh
$ npm install
```

## Run on Local

```sh
$ npm start
```

## Run on Docker

- **Run and Build Docker Images**

  ```sh
  $ docker build -t frontend:v1.0.0 .
  ```

  ```sh
  $ docker run -d -p 8081:8081 frontend:<version>
  ```
