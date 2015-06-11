/**
 *  @fileOverview Application's Gulpjs configuration override file
 *
 *  @author       Scott Nath
 *
 */
'use strict';

/*********************************************
* Global settings override
* either override individual settings or the entire object
*/
var config = require('../../gulp/config');

// config.scss.foo = 'bar';

config.javascriptGlobbing.files = [
  '!' + config.development.app + '/bower_components/**', // ignore bower-ingested scripts
  '!' + config.development.app + '/**/*_test.js', // ignore our test scripts
  '!' + config.development.app + '/karma.conf.js', // ignore our karma config
  '!' + config.development.app + '/_gulp/**', // ignore all files in the app's _gulp directory
  config.development.app + '/scripts/templates.js', // template script
  config.development.app + '/scripts/app.js', // main app script
  config.development.app + '/**/*.js' // main application file
];

config.eslint.src = [
  '!app/bower_components/**', // ignore bower-ingested scripts
  '!' + config.development.app + '/scripts/templates.js', // template script
  'app/**/*.js'
];
module.exports = config;
