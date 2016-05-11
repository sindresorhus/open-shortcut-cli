#!/usr/bin/env node
'use strict';
const meow = require('meow');
const openShortcut = require('open-shortcut');

const cli = meow(`
	Usage
	  $ open-shortcut <filepath>

	Examples
	  $ open-shortcut google

	Leave out the extension for cross-platform compatibility
`);

if (cli.input.length === 0) {
	console.error('Specify a file path');
	process.exit(1);
}

openShortcut(cli.input[0]);
