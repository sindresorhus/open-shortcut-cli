'use strict';
var test = require('ava');
var childProcess = require('child_process');

test(function (t) {
	t.plan(1);

	childProcess.execFile('./cli.js', ['fixture/google'], {
		cwd: __dirname
	}, function (err) {
		t.assert(!err, err);
	});
});
