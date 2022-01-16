const chalk = require('chalk');
const log = require('../../../lib/logging').log;
const prompt = require('../../../lib/logging').prompt;
const fs = require('fs');
const { exec } = require('child_process');

module.exports = async (options, argv, db) => {
	let out = new log(chalk.white('Enter your app name:')).end();
	let name = await new prompt().ask(chalk.yellowBright('> Name: '));
	if (!name) {
		out.edit(chalk.red('Operation canceled - No name entered!')).end();
		return;
	}
	out.edit(chalk.green(`Alright, your app will be created as ${name}`)).end().end();
	out.edit(chalk.greenBright('Fetching config for Client ID, Secret and Token...'));
	let data = await db.getData('/');
	let { id, secret, token } = data;
	// console.log(id, secret, token);
	if (!id || !secret || !token) {
		out.clear().edit(chalk.redBright('Warning: No token, secret or id found!')).end();
	}
	// console.log(process.cwd());
	try {
		await fs.mkdirSync(`${process.cwd()}/${name}`);
	} catch (e) {
		out.clear().edit(chalk.yellow('Directory already exists! Continuing...'));
	}

	try {
		out.clear().edit(chalk.yellow('Initializing NPM...')).end();
		await exec(`npm init -y`, { cwd: `${process.cwd()}/${name}` }, async () => {
			out.clear().edit(chalk.yellow('Installing packages...')).end();
			await exec(`npm i --save @redcrafter07/eztwitch`, { cwd: `${process.cwd()}/${name}` }, async () => {
				out.clear().edit(chalk.yellow('Creating index.js...')).end();
				await fs.writeFileSync(
					`${`${process.cwd()}/${name}/`}index.js`,
					`const EZTwitch = require('@redcrafter07/eztwitch');\n
		const client = new EZTwitch.client().setToken(${token ? `'${token}'` : 'your-token-here'}).setSecret(${secret
						? `'${secret}'`
						: 'your-secret-here'}).setID(${id ? `'${id}'` : 'your-id-here'});\n
		const { utils, endpoints } = EZTwitch;\n\n
		
		(async () => {\n
			await client.setup();\n
			//your EZTwitch code here\n
		})();`
				);
				out.clear().edit(chalk.greenBright('Success!')).end();
			});
		});
	} catch (e) {}
};

// () => {};
