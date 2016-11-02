# JustNUM

[![Build Status](https://travis-ci.org/uglymugs/JustNUM.svg?branch=master)](https://travis-ci.org/uglymugs/JustNUM) [![Coverage Status](https://coveralls.io/repos/github/uglymugs/JustNUM/badge.svg?branch=master)](https://coveralls.io/github/uglymugs/JustNUM?branch=master)

## Quickstart guide

The app is hosted from the master branch [here](http://just-num.herokuapp.com/). To run the app locally, do the following:

If you do not already have `npm-run-all` installed globally, install it:

```bash
npm install -g npm-run-all
```
Then install Deployd following the instructions [here](http://docs.deployd.com/docs/getting-started/installing-deployd.html). As part of installing Deployd you will make sure you have MongoDB running.

Then install the node dependencies. Because of an issue with one of the dependencies you will need to do `npm install` twice.

```bash
git clone https://github.com/uglymugs/JustNUM.git && cd JustNUM
npm install
npm install  
npm run go
```

To repeat, `npm install` must be run twice!


Then go to `http://localhost:3000/` in your browser. 
