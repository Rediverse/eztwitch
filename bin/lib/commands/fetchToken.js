const chalk = require('chalk'),
	fs = require('fs'),
	commandLineArgs = require('command-line-args'),
	axios = require('axios').default,
	log = console.log;

module.exports = async (argv, db) => {
	let args = [
		{
			name: 'id',
			alias: 'i',
			type: String,
			multiple: false
		},
		{ name: 'secret', alias: 's', type: String, multiple: false },
		{
			name: 'config',
			alias: 'c',
			type: Boolean,
			multiple: false
		},
		{
			name: 'noInfo',
			alias: 'n',
			type: Boolean,
			multiple: false
		},
		{
			name: 'debug',
			alias: 'd',
			type: Boolean,
			multiple: false
		},
		{
			name: 'save',
			type: Boolean,
			multiple: false
		}
	];

	let options = commandLineArgs(args, { argv });

	let id, secret;

	if (options.config) {
		if (options.noInfo) {
			secret = await db.getData('/secret');
			id = await db.getData('/id');

			let res = await axios.post(
				`https://id.twitch.tv/oauth2/token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`
			);

			if (res.status != 200) {
				log(chalk.red('Error!\n'));
				log(chalk.red(res.data));
				return;
			}

			if (options.debug) {
				log(res.data);
			}

			log(`Bearer ${res.data.access_token}`);

			return;
		}

		process.stdout.write(chalk.yellow('[1/3][0/1] Fetching config...'));
		secret = await db.getData('/secret');
		id = await db.getData('/id');
		process.stdout.clearLine();
		process.stdout.cursorTo(0);
		process.stdout.write(chalk.green('[1/3][1/1] Config fetched!\n'));
		process.stdout.write(chalk.yellow('[2/3][0/3] Fetching token...'));
		setTimeout(async () => {
			process.stdout.clearLine();
			process.stdout.cursorTo(0);
			process.stdout.write(chalk.yellow('[2/3][1/3] Sending request...'));
			let res = await require('../../../lib/fetchToken')(id, secret);

			process.stdout.clearLine();
			process.stdout.cursorTo(0);
			process.stdout.write(chalk.yellow('[2/3][2/3] Request recieved!'));

			setTimeout(() => {
				process.stdout.clearLine();
				process.stdout.cursorTo(0);
				process.stdout.write(chalk.green('[2/3][3/3] Fetched successfully!\n'));
				if (res.status != 200) {
					process.stdout.clearLine();
					process.stdout.cursorTo(0);
					process.stdout.write(chalk.red('[-/3][-/3] Error!\n'));
					process.stdout.write(chalk.red(res.data));
					return;
				}

				if (options.debug) {
					log(res.data);
				}
				log(chalk.green(`[3/3] Your token is: \n"Bearer ${res.data.access_token}"`));
				if (options.save) {
					db.push('/token', `Bearer ${res.data.access_token}`);
					log(chalk.green('[-/3] Token saved!'));
				}
			}, 500);
		}, 250);
	} else {
		if (!(options.secret && options.id)) {
			log(chalk.redBright('Please provide both an id and secret!'));
			log(chalk.gray('> Operation canceled.'));
			return;
		}
	}
};
