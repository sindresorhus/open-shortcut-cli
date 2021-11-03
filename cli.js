#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import openShortcut from 'open-shortcut';

const cli = meow(`
	Usage
	  $ open-shortcut <file-path>

	Examples
	  $ open-shortcut google

	Leave out the extension for cross-platform compatibility
`, {
	importMeta: import.meta,
});

if (cli.input.length === 0) {
	console.error('Specify a file path');
	process.exit(1);
}

openShortcut(cli.input[0]);
