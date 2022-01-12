module.exports = async (options, argv, db) => {
	switch (options.command) {
		case 'config':
			await require('./commands/config')(argv, db);
			break;
		case 'token':
			await require('./commands/fetchToken')(argv, db);
			break;
	}
};
