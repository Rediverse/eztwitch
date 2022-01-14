const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');

let db = new JsonDB(new Config('ezTwitch.config.json', true, false, '/'));

module.exports = db;
