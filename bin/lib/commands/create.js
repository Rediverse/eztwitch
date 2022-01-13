const chalk = require('chalk'),
	log = require('../../../lib/logging').log,
	prompt = require('../../../lib/logging').prompt;

module.exports = async (argv, db) => {
	new log(chalk.red(`This command is not done yet and will be finished soon.`)).end();
	return;
	let commands = [];
	try {
		commands = await db.getData('/commands');
	} catch (e) {}

	let out = new log(chalk.hex('#CCCCCC')('Type "cancel" at any time to cancel.')).end();
	let inp = new prompt();
	let name = await inp.ask(chalk.yellowBright('Your command name: '));
	if (name == 'cancel' || name == undefined || name == '') {
		console.log(chalk.red('Operation cancelled!'));
		return;
	}

	let exists = false;

	await commands.forEach(cmd => (cmd.name.toLowerCase() == name.toLowerCase() ? (exists = true) : null));

	if (exists) {
		out.clear().edit(chalk.red(`Command ${name} already exists!`)).end();
		return;
	}

	let url = await inp.ask(chalk.yellowBright('Your request url: '));
	if (url == 'cancel' || url == undefined || url == '') {
		console.log(chalk.red('Operation cancelled!'));
		return;
	}
	let requestType = await inp.ask(chalk.yellowBright('Request type (GET, POST etc.): '));
	if (requestType == 'cancel' || requestType == undefined || requestType == '') {
		console.log(chalk.red('Operation cancelled!'));
		return;
	}

	url = url.toLowerCase();

	out.edit(
		`Creating command ${chalk.yellowBright(name)} with request to ${chalk.yellowBright(
			url
		)} as ${chalk.yellowBright(`${requestType.toUpperCase()}-Request...`)}`
	);

	let data = {
		name: name,
		url: url,
		requestType: requestType.toLowerCase()
	};

	commands.push(data);

	await db.push('/commands', commands);

	out.clear().edit(chalk.green(`Command "${name}" successfully created!`)).end();
};
