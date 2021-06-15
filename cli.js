#!/usr/bin/env node

const linesWritten = require('./App')
console.log(linesWritten(process.argv[2] || './'))
