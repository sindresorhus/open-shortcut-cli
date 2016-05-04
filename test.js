import test from 'ava';
import execa from 'execa';

test(t => {
	t.notThrows(execa('./cli.js', ['fixture/google'], {cwd: __dirname}));
});
