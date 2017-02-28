#!/usr/bin/env node
require('babel-polyfill');
require('../lib/cli/generate').default(process.argv.slice(2));
