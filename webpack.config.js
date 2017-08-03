var path = require('path');
var webpack = require('webpack');
var config = require('@ionic/app-scripts/config/webpack.config.js');

config.plugins.push(new webpack.EnvironmentPlugin(['IONIC_ENV']));
module.exports = config;
