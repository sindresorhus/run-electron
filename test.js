import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout, stderr} = await execa('./cli.js', ['fixture.js']);
	t.is(stdout.trim(), '🦄');
	t.is(stderr.trim(), '');
});
