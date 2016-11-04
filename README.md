# JustNUM

[![Build Status](https://travis-ci.org/uglymugs/JustNUM.svg?branch=master)](https://travis-ci.org/uglymugs/JustNUM) [![Coverage Status](https://coveralls.io/repos/github/uglymugs/JustNUM/badge.svg?branch=master)](https://coveralls.io/github/uglymugs/JustNUM?branch=master)

## Quickstart guide

First, if you are new to the project, check out our problem report [here](https://github.com/uglymugs/JustNUM/blob/master/problem-report.md)

The app is hosted from a `release` branch [here](http://uglymugs-justnum.herokuapp.com/). To run the app locally, do the following:

If you do not already have `npm-run-all` installed globally, install it:

```bash
npm install -g npm-run-all
```
Then install Deployd following the instructions [here](http://docs.deployd.com/docs/getting-started/installing-deployd.html). As part of installing Deployd you will make sure you have MongoDB running.

Then clone the repo and install the node dependencies.

```bash
git clone https://github.com/uglymugs/JustNUM.git && cd JustNUM
npm install
npm run go
```

Then go to `http://localhost:3000/` in your browser. 
