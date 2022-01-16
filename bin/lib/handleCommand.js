const chalk = require('chalk'),
	log = require('../../lib/logging').log;

module.exports = async (options, argv, db) => {
	switch (options.command) {
		case 'create-app':
			await require('./commands/create-app')(options, argv, db);
			break;
		case 'config':
			await require('./commands/config')(argv, db);
			break;
		case 'token':
			await require('./commands/fetchToken')(argv, db);
			break;
		case 'create':
			await require('./commands/create.js')(argv, db);
			break;
		case 'validate':
			{
				let data = await db.getData('/');
				let out = new log(chalk.green(`Validating token...`));
				let res = await require('../../lib/validate')(data.token);
				if (res.status == 200) {
					out.clear().edit(chalk.green(`Token is valid. \nDebug: ${JSON.stringify(res.data)}`));
				} else {
					out
						.clear()
						.edit(chalk.red(`Error! Status: ${res.status} | ${res.statusText} | Info:\n${res.data}`));
				}
			}
			break;
		case undefined:
			await require('./commands/none')(argv, db);
			break;
		default:
			await require('./commands/default')(options, argv, db);
			break;
	}
};
