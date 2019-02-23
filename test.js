import test from 'ava';
import execa from 'execa';

test('it keeps single line strings', async t => {
	const {stdout, stderr} = await execa('./cli.js', ['fixture-single-line.js']);
	t.is(stdout.trim(), '🦄');
	t.is(stderr.trim(), '');
});

test('it keeps multi line strings', async t => {
	const {stdout, stderr} = await execa('./cli.js', ['fixture-multi-line.js']);
	t.is(stdout, '\n\n🦄\n\n\n🦄\n\n🦄\n\n');
	t.is(stderr, '');
});
