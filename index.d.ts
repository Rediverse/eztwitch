declare class Client {
	/**
     * @param id {string} The ID of the client.
     * @param secret {string} The secret of the client.
     * @param token {string} The token to use.
     */
	constructor(id?: string, secret?: string, token?: string);
	id: string;
	secret: string;
	token: string;
	/**
     * Set the token to use.
     * @param token {string} The token
    */
	setToken(token: string): Client;
	/**
     * Set the Client ID
     * @param id {string} The ID of the client.
    */
	setID(id: string): Client;
	/**
     * Set the Client Secret
     * @param secret {string} The secret of the client.
    */
	setSecret(secret: string): Client;
	headers: string;
	/**
         * Fetch the Twitch API.
         * @param method {string} The method to use for the request, e.g. GET, POST, PUT, DELETE
         * @param endpoint {string} The endpoint to fetch. e.g. https://api.twitch.tv<endpoint> | You can get a url from the documentation: https://dev.twitch.tv/docs/api/reference
         * @param headers {object} The headers to use. Authorization and Client-ID will be provided by default.
         */
	api: (method: string, endpoint: string, headers?: object) => Promise<any>;
	/**
     * Reloads the variables.
     * @returns {void}
     */
	reload(): void;
	/**
     * This function is used to setup EZ Twitch. It will automatically check for tokens, client IDs etc. and will set up tokens if they are not found.
     */
	setup(): Promise<Client>;
}
export namespace utils {
	function formatTimestamp(input: any, format: any): string;
	function formatTimestamp(input: any, format: any): string;
	function thumbnailSize(input: any, width: any, height: any): any;
	function thumbnailSize(input: any, width: any, height: any): any;
	function relativeTimestamp(timestamp: any, format: any, locale: any): string;
	function relativeTimestamp(timestamp: any, format: any, locale: any): string;
	/**
     * @param streamerLogin {string} The streamer's login name (e.g. monstercat)
     * @param client {EZTwitch.client} The client object
     */
	function getStreamInfo(
		streamerLogin: string,
		client: Client
	): Promise<{
		id: any;
		login: any;
		display: any;
		broadcasterType: any;
		description: any;
		profileImage: any;
		offlineImage: any;
		views: any;
		viewers: any;
		language: any;
		createdAt: any;
		startedAt: any;
		tagIds: any;
		title: any;
		type: any;
		game: any;
		thumbnail: any;
		streamId: any;
	}>;
	/**
     * @param streamerLogin {string} The streamer's login name (e.g. monstercat)
     * @param client {EZTwitch.client} The client object
     */
	function getStreamInfo(
		streamerLogin: string,
		client: any
	): Promise<{
		id: any;
		login: any;
		display: any;
		broadcasterType: any;
		description: any;
		profileImage: any;
		offlineImage: any;
		views: any;
		viewers: any;
		language: any;
		createdAt: any;
		startedAt: any;
		tagIds: any;
		title: any;
		type: any;
		game: any;
		thumbnail: any;
		streamId: any;
	}>;
}
import endpoints = require("./lib/endpoints");
export { Client as client, endpoints };
