#!/usr/bin/env node
'use strict';
var meow = require('meow');
var openShortcut = require('open-shortcut');

var cli = meow({
	help: [
		'Usage',
		'  $ open-shortcut <filepath>',
		'',
		'Example',
		'  $ open-shortcut google',
		'',
		'Leave out the extension for cross-platform compatibility'
	]
});

if (cli.input.length === 0) {
	console.error('Please supply a filepath');
	process.exit(1);
}

openShortcut(cli.input[0], function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
});
