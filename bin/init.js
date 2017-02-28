#!/usr/bin/env node
require('babel-polyfill');
require('../lib/cli/init').default(process.argv.slice(2));
