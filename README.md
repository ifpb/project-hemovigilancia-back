```bash
$ yarn init -y
```
```bash
$ yarn add express cors mongoose
```
```bash
$ yarn add -D typescript ts-node-dev @types/express @types/cors @types/mongoose eslint@6.8.0
$ yarn add -D eslint-import-resolver-typescript prettier eslint-config-prettier eslint-plugin-prettier
$ yarn add -D
```
```bash
$ yarn tsc --init
$ yarn eslint --init
```
> Creating container docker
```bash
$ docker run --name mongodb -p 27018:27017 -d mongo
```
> Start on server
```bash
$ yarn dev:server
```

