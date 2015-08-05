#!/usr/bin/env node

var files = process.argv.slice(2)
var remaining = files.length

var fs = require('fs')
var request = require('request')
var crypto = require('crypto')
var uglify = require('uglify-js')
var cssmin = require('cssmin')
var template = require('./template.js')

var id = crypto.randomBytes(4).toString('hex')
var ws = fs.createWriteStream('bundle!' + id + '.js')

var baseURL = 'http://uisandbox.qscend.com/data/layout'
var scripts = []
var styles = ['`']

files.map(function (file) {
  var isJS = file.indexOf('.js') > -1
  var url = isJS ? baseURL + '/js/' + file
                 : baseURL + '/css/' + file
  request(url, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      remaining--
      if (isJS) {
        scripts.push(body + ';')
      } else {
        styles.push(body)
      }

      if (!remaining) {
        styles.push('`')
        var css = cssmin(styles.join(''))
        var jsFull = scripts.join('')
        var js = uglify.minify(jsFull, {fromString: true}).code
        ws.end(template(js, css))
      }
    }
  })
})
