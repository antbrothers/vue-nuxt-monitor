/*
 * @Author: jianxi_lin 
 * @Date: 2018-05-08 17:53:23 
 * @Last Modified by: jianxi_lin
 * @Last Modified time: 2018-05-16 15:30:26
 */
var  express = require('express')
var   Nuxt = require('nuxt').Nuxt
var Builder = require('nuxt').Builder
var rest = require('./middleware/rest');
var controller = require('./controller');
//var mock = require('./controllers/mockController')

const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3002

app.set('port', port)

// Import API Routes
// app.use('/api', mock)
app.use(rest.restify())
app.use(controller())





// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
