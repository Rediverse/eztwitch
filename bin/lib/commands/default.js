const { default: axios } = require('axios');
const chalk = require('chalk'),
	log = require('../../../lib/logging').log;

module.exports = async (options, argv, db) => {
	new log(chalk.red(`Command ${cmd} not found.`)).end();
	return;
	let cmd = options.command;
	let data = await db.getData('/');
	let commands = data.commands || [];
	commands = commands.filter(command => command.name == cmd);
	console.log(commands);

	if (commands.length == 0) {
		new log(chalk.red(`Command ${cmd} not found.`)).end();
		return;
	}

	let command = commands[0];

	let url = command.url;

	await axios[command.requestType](url, {
		headers: {
			'Client-ID': data.id,
			token: data.token
		}
	});

	function fetchData(url, method, id, token) {}

	async function validate(token) {
		let res = await require('../../../lib/fetchToken')(token);
		console.log(res);
	}
};

// Source: https://github.com/RedCrafter07/useful-arrays
Array.prototype.filter = function(condition) {
	let arr = [];
	this.forEach(item => {
		if (condition(item) == true) arr.push(item);
	});

	return arr;
};
