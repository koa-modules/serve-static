# koa-serve-static

> Serve static files for koa.  
> [serve-static] wrapper for koa's middleware.

[![NPM version][npm-img]][npm-url]
[![Build status][travis-img]][travis-url]
[![Test coverage][coveralls-img]][coveralls-url]
[![License][license-img]][license-url]
[![Dependency status][david-img]][david-url]

## Install

```sh
$ npm install --save koa-serve-static
```

## Usage

### **=1.x** 100%, working with `koa-v2`

```js
const koa = require('koa');
const serveStatic = require('koa-serve-static');
const app = new Koa();

app.use(serveStatic(root, options));
```

### **<1.x**

```js
var koa = require('koa');
var serveStatic = require('koa-serve-static');
var app = koa();

app.use(serveStatic(root, options));
```

[npm-img]: https://img.shields.io/npm/v/koa-serve-static.svg?style=flat-square
[npm-url]: https://npmjs.org/package/koa-serve-static
[travis-img]: https://img.shields.io/travis/koa-modules/serve-static.svg?style=flat-square
[travis-url]: https://travis-ci.org/koa-modules/serve-static
[coveralls-img]: https://img.shields.io/coveralls/koa-modules/serve-static.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/koa-modules/serve-static?branch=master
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
[david-img]: https://img.shields.io/david/koa-modules/serve-static.svg?style=flat-square
[david-url]: https://david-dm.org/koa-modules/serve-static
[serve-static]: https://github.com/expressjs/serve-static
