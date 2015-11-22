'use strict'

/*!
 * serve-static
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * Copyright(c) 2014 Douglas Christopher Wilson
 * Copyright(c) 2015 Fangdun Cai
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

const originalServeStatic = require('serve-static')

/**
 * @param {String} root
 * @param {Object} options
 * @return {Promise}
 * @api public
 */

function serveStatic(root, options) {
  const fn = originalServeStatic(root, options)
  return (ctx, next) => {
    return new Promise((resolve, reject) => {
      // hacked statusCode
      if (ctx.status === 404) ctx.status = 200
      // unnecessary response by koa
      ctx.respond = false
      // 404, serve-static forward non-404 errors
      // force throw error
      fn(ctx.req, ctx.res, reject)
    })
  }
}

module.exports = serveStatic
