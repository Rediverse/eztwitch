const chalk = require('chalk'),
	fs = require('fs'),
	commandLineArgs = require('command-line-args'),
	axios = require('axios').default,
	log = console.log;

module.exports = async (id, secret) => {
	return await axios.post(
		`https://id.twitch.tv/oauth2/token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`
	);
};
