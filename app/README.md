Lastenkirkko
============

This is the client application specific readme file.

## Setup

Requirements: *Node*

```
$ sudo npm install -g gulp bower
$ npm install
$ cp .env.dist .env
```

Open `.env`, enter your S3 credentials, and save the file.

## Start Development Environment

```
$ npm start
```

## After Git Pull

Rebuild the client after a Git pull. (Mainly for *API developers* who want to rebuild the client once.)

```
$ npm run build
```

## Deploy

To build the client application, create a ZIP archive of the public directory, and upload it to S3, run:

```
$ npm run deploy
```

Deploy without running tests:

```
$ npm run deploy:skip-tests
```

## Run End-to-End Tests

```
$ npm test
```

(Test filenames must contain a `-spec.js` suffix.)
