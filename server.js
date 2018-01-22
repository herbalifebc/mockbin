'use strict'

var app = require('./src')
var dotenv = require('dotenv')
var pkg = require('./package')

dotenv.config({ silent: true })

var options = {
  port: process.env.MOCKBIN_PORT || pkg.config.port,
  quiet: process.env.MOCKBIN_QUIET || pkg.config.quiet,
  redis: process.env.MOCKBIN_REDIS || pkg.config.redis,
  apiEmbed: process.env.MOCKBIN_APIEMBED || process.env.npm_package_config_apiEmbed    
}

app(options, function () {
  if (cmd.apiEmbed != options.apiEmbed) {
    console.info('API embed site over-ridden - now provided by: [%s]', cmd.apiEmbed)
  }
  console.info('starting server on port: %d', options.port)
})
