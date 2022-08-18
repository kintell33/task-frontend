# HOW TO RUN?

## USING NPM

### First install all dependecies

```
npm ci
```
> Better using the `npm ci` command for using the exact version of the dependencies stablished in the package-lock

### Create environment file

You have to create an environment file named `.env` using the `.env.dist` as an example, dont upload the variables in the original `.env` to the repository!

### Run the application

You can run the app with

```
npm start
```
-------------------------------------------------------
## USING DOCKER

### create the environment file

First you have to create the .env if its not exist, use the .env.dist as an example

### build the docker image

You have to run the following command

> the dockerfile has 2 parts, first the build where docker will install the dependencies and then copy the build to a smaller image (thats cause you dont need the modules if its already compiled)

```
docker build -t task-front:latest .
```

### Run the application

Run the application with the next command

> Important! you can change the following: 
> `-d` start as dettached
> `--name` name for the container when you run `docker ps`
> `-p` ports, fist the port in your host and then the port expose by the app

Dont forget the last property is the name of the tag

```
docker run --name task-front -p 8080:80 task-front:latest
```