const chalk = require('chalk'),
	fs = require('fs'),
	commandLineArgs = require('command-line-args'),
	axios = require('axios').default,
	log = console.log;

module.exports = async token => {
	if (!token) {
		return {
			data: 'Unable to validate token. Please provide a token in the config to use this.',
			status: 400,
			statusText: 'Bad Request'
		};
	}
	let res = await axios.get(`https://id.twitch.tv/oauth2/validate`, { headers: { Authorization: token } });
	return { data: res.data, status: res.status, statusText: res.statusText };
};
