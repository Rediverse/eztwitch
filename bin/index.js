#!/usr/bin/env node

const chalk = require('chalk'),
	fs = require('fs'),
	commandLineArgs = require('command-line-args'),
	axios = require('axios').default,
	log = console.log;

let db = require('../lib/db');

const mainDefinitions = [ { name: 'command', defaultOption: true } ];
const options = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true });
const argv = options._unknown || [];

(async () => {
	await require('./lib/handleCommand')(options, argv, db);
})();
