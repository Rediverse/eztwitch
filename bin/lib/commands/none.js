const chalk = require('chalk'),
	log = require('../../../lib/logging').log;

module.exports = async () => {
	let hsl = [ 264, 73, 64 ];
	let l = 100;
	let out = new log(chalk.hsl(hsl[0], hsl[1], l).bold('EZ Twitch'));
	let int = setInterval(() => {
		l--;

		out.edit(chalk.hsl(hsl[0], hsl[1], l).bold('EZ Twitch'));

		if (l <= hsl[2]) {
			clearInterval(int);
			afterInt();
		}
	}, 5);

	function afterInt() {
		out.end();

		out = new log('Welcome to EZ Twitch!');
		out.end();
		setTimeout(() => {
			out.end();
			setTimeout(() => {
				out.edit(
					"EZ Twitch is a simple command line interface for Twitch's API. It simplifies the process of the interaction by providing powerful request commands by default. If we forgot something, you can add your own command too!"
				);
				out.end();
				setTimeout(() => {
					out.end();
					setTimeout(() => {
						out.edit(
							'To get started, go to our official documentation at https://github.com/Rediverse/eztwitch/wiki/The-CLI.'
						);
					}, 100);
				}, 1500);
			}, 100);
		}, 1500);
	}
};
