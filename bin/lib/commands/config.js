const chalk = require('chalk'),
	fs = require('fs'),
	commandLineArgs = require('command-line-args'),
	axios = require('axios').default,
	log = console.log;

module.exports = async (argv, db) => {
	let args = [
		{ name: 'token', alias: 't', type: String, multiple: false },
		{
			name: 'id',
			alias: 'i',
			type: String,
			multiple: false
		},
		{ name: 'secret', alias: 's', type: String, multiple: false },
		{ name: 'token-autogen', alias: 'a', type: Boolean, multiple: false },
		{ name: 'show', type: Boolean, multiple: false },
		{ name: 'clear', alias: 'c', multiple: false, type: Boolean },
		{ name: 'delete', alias: 'd', multiple: false, type: String }
	];

	let options = commandLineArgs(args, { argv });

	if (options.clear) {
		log(chalk.yellow('Clearing config...'));
		await db.delete('/');
		log(chalk.green('Config cleared!'));
		return;
	}

	if (options.delete) {
		log(chalk.yellow(`Deleting ${options.delete} from config...`));
		await db.delete(`/${options.delete}`);
		log(chalk.green(`${options.delete} deleted!`));
	}

	if (options.show) {
		log(chalk.green("Here's the config you've requested:"));
		log(db.getData('/'));
		return;
	}

	if (options.token) {
		db.push('/token', options.token);
	}

	if (options.id) {
		db.push('/id', options.id);
	}

	if (options.secret) {
		db.push('/secret', options.secret);
	}

	if (options['token-autogen']) {
		db.push('/tokenAutogen', options['token-autogen']);
		log(chalk.green('Token Autogen enabled!'));
	}
};
