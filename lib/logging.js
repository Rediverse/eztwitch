class log {
	constructor(text) {
		this.text = text;
		process.stdout.write(text);
		return this;
	}

	end() {
		process.stdout.write('\n');
		return this;
	}

	edit(text) {
		process.stdout.cursorTo(0);
		process.stdout.write(text);
		return this;
	}

	getText() {
		return this.text;
	}

	clear() {
		process.stdout.clearLine();
		return this;
	}
}

const readline = require('readline');

class prompt {
	constructor() {}

	ask(question, callback) {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		if (callback) {
			rl.question(`${question}`, function(output) {
				callback(output);
				rl.close();
			});
		} else {
			return new Promise((resolve, reject) => {
				rl.question(`${question}`, function(output) {
					resolve(output);
					rl.close();
				});
			});
		}
	}
}

module.exports = { log, prompt };
