const chalk = require('chalk');
const axios = require('axios').default;
const moment = require('moment');
/* const log = console.log;

log(chalk.red("I don't think this is what you wanted to do..."));
log(chalk.yellow('If you want to install the eztwitch-cli, you can do so by running:'));
log(chalk.green('npm i -g @redcrafter07/eztwitch'));
log(chalk.yellow('After your installation you can run eztwitch in the console.'));
log(chalk.gray('> Exiting...'));

process.exit(1);
return; */

let db;

const log = require('./lib/logging').log;

let utils = {
	formatTimestamp(input, format) {
		return moment(input).format(format);
	},
	thumbnailSize(input, width, height) {
		input = input.replace('{width}', width);
		input = input.replace('{height}', height);
		return input;
	},
	relativeTimestamp(timestamp, format, locale) {
		moment.locale(locale);
		let unix = moment(timestamp, format).format('X');
		let now = moment().format('X');
		let diff = now - unix;
		let time = moment.duration(diff, 'seconds');
		return time.humanize();
	},
	/**
	 * @param streamerLogin {string} The streamer's login name (e.g. monstercat)
	 * @param client {EZTwitch.client} The client object
	 */
	async getStreamInfo(streamerLogin, client) {
		let stream = await client.api('GET', `${endpoints.STREAMS.GET}?user_login=${streamerLogin}`);
		if (stream.length !== 0) {
			stream = stream[0];
		}

		let user = await client.api('GET', `${endpoints.USERS.GET.USER}?login=${streamerLogin}`);
		if (user.length === 0) {
			throw new Error(`No user found for ${streamerLogin}!`);
			return null;
		}

		user = user[0];

		let channel = await client.api('GET', `${endpoints.CHANNELS.GET_INFORMATION}?broadcaster_id=${user.id}`);
		if (channel.length === 0) {
			throw new Error(`No channel found for ${streamerLogin}!`);
			return null;
		}

		channel = channel[0];

		let data = {
			id: user.id,
			login: user.login,
			display: user.display_name,
			broadcasterType: user.broadcaster_type,
			description: user.description,
			profileImage: user.profile_image_url,
			offlineImage: user.offline_image_url,
			views: user.view_count,
			viewers: stream.viewer_count,
			language: stream.broadcaster_language,
			createdAt: user.created_at,
			startedAt: stream.started_at,
			tagIds: stream.tag_ids,
			title: stream.title,
			type: stream.type,
			game: stream.game_name,
			thumbnail: stream.thumbnail_url,
			streamId: stream.id
		};

		return data;
	}
};

/**
 * The endpoints of the Twitch API. Check out https://dev.twitch.tv/docs/api/reference for more information.
 */
let endpoints = require('./lib/endpoints');

class Client {
	/**
     * @param id {string} The ID of the client.
     * @param secret {string} The secret of the client.
	 * @param token {string} The token to use.
     */
	constructor(id, secret, token) {
		this.id = id;
		this.secret = secret;
		this.token = token;
		this.reload();
		return this;
	}

	/**
	 * Set the token to use.
	 * @param token {string} The token
	*/
	setToken(token) {
		this.token = token;
		this.reload();
		return this;
	}

	/** 
	 * Set the Client ID
	 * @param id {string} The ID of the client.
	*/
	setID(id) {
		this.id = id;
		this.reload();
		return this;
	}

	/** 
	 * Set the Client Secret
	 * @param secret {string} The secret of the client.
	*/
	setSecret(secret) {
		this.secret = secret;
		this.reload();
		return this;
	}

	token = '';
	id = '';
	headers = '';

	/**
		 * Fetch the Twitch API.
		 * @param method {string} The method to use for the request, e.g. GET, POST, PUT, DELETE
		 * @param endpoint {string} The endpoint to fetch. e.g. https://api.twitch.tv<endpoint> | You can get a url from the documentation: https://dev.twitch.tv/docs/api/reference
		 * @param headers {object} The headers to use. Authorization and Client-ID will be provided by default.
		 */
	api = async function(method, endpoint, headers) {
		if (!endpoint) {
			throw new Error('No endpoint provided!');
			return;
		}
		if (!headers) headers = {};
		headers['Authorization'] = this.token;
		headers['Client-ID'] = this.id;
		let res = await axios[method.toLowerCase()](`https://api.twitch.tv${endpoint}`, {
			headers: headers
		});

		return res.data.data;
	};

	/**
	 * Reloads the variables.
	 * @returns {void}
	 */

	reload() {
		this.api.id = this.id;
		this.api.secret = this.secret;
		this.api.token = this.token;
		return this;
	}

	/**
	 * This function is used to setup EZ Twitch. It will automatically check for tokens, client IDs etc. and will set up tokens if they are not found.
	 */
	async setup() {
		let out = new log(chalk.yellow('[0/4] Fetching config...'));
		let config = { id: this.id, secret: this.secret, token: this.token };
		out.clear().edit(chalk.greenBright('[0/4] ✅ Config fetched!')).end();
		out.edit('[1/2][1/3] Getting token...');
		let token = config.token;
		if (token) out.clear().edit(chalk.greenBright('[1/4][1/3] ✅ Token fetched!')).end();
		else {
			out.clear().edit(chalk.redBright('[1/2][1/3] ❌ Token not found!')).end();
			out.edit(chalk.yellow('[1/2][1/3][1/2] Trying to get secret and ID...'));
			let secret = config.secret;
			let id = config.id;
			if (secret && id && secret != '' && id != '') {
				out.clear().edit(chalk.greenBright('[1/2][1/3][1/2] ✅ Secret and ID fetched!')).end();
			} else {
				out.clear().edit(chalk.redBright('[1/2][1/3][1/2] ❌ Secret and ID not found!')).end();
				out
					.edit(
						chalk.gray(
							'> To setup ID and Secret, please provide them in the constructor or use the set-Methods.'
						)
					)
					.end();
				out.edit(chalk.gray('> Setting up config values...')).end();
				out.edit(chalk.gray('> Ending process...')).end();
				process.exit(1);
			}

			out.edit(chalk.yellow('[1/2][1/3][2/2] Trying to get token...'));
			let token = await require('./lib/fetchToken')(id, secret);
			// console.log(token.data);

			this.token = `Bearer ${token.data.access_token}`;

			out.clear().edit(chalk.greenBright('[1/4][1/3][2/2] ✅ Token fetched!')).end();
		}

		out.edit(chalk.yellow('[2/2][1/2] Validating token...'));

		let res = await require('./lib/validate')(this.token);

		this.id = res.data.client_id;

		if (res.status === 401) {
			out.clear().edit(chalk.redBright('[2/4][1/2] ❌ Token invalid!')).end();
			out.edit(chalk.yellow('[2/4][1/2][1/2] Trying to get token...'));
			let token = await require('./lib/fetchToken')(this.id, this.secret);
			this.token = `Bearer ${token.data.access_token}`;
			out.clear().edit(chalk.greenBright('[2/4][1/2][1/2] ✅ Token fetched!')).end();
			out.edit(chalk.yellow('[2/4][1/2][2/2] Validating token...'));
			res = await require('./lib/validate')(this.token);
			if (res.data.status === 401) {
				out.clear().edit(chalk.redBright('[2/4][1/2][2/2] ❌ Token invalid!')).end();
				out.edit(chalk.gray('> Setting up config values...')).end();
				out.edit(chalk.gray('> Ending process...')).end();
				process.exit(1);
			}
			out.clear().edit(chalk.greenBright('[2/2][1/2][2/2] ✅ Token fetched!')).end();
		} else if (res.status === 200) {
			out.clear().edit(chalk.greenBright('[2/2][2/2] ✅ Token valid!')).end();
		}

		out.edit(chalk.hex('#00ff00')('Setup completed - Welcome to EZ Twitch!')).end();

		this.reload();

		return this;
	}
}

module.exports = { client: Client, utils, endpoints };
