#!/usr/bin/env node
'use strict';
const {spawn} = require('child_process');
const electron = require('electron');
const split = require('split2');
const filter = require('through2-filter');
const map = require('through2-map');
const pumpify = require('pumpify');

process.env.FORCE_COLOR = '1';

const removeJunk = () => {
	const filterStream = filter({wantStrings: true}, chunk => {
		// Example: 2018-08-10 22:48:42.866 Electron[90311:4883863] *** WARNING: Textured window <AtomNSWindow: 0x7fb75f68a770>
		if (/\d+-\d+-\d+ \d+:\d+:\d+\.\d+ Electron(?: Helper)?\[\d+:\d+] /.test(chunk)) {
			return false;
		}

		// Example: [90789:0810/225804.894349:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
		if (/\[\d+:\d+\/|\d+\.\d+:ERROR:CONSOLE\(\d+\)\]/.test(chunk)) {
			return false;
		}

		// Example: ALSA lib confmisc.c:767:(parse_card) cannot find card '0'
		if (/ALSA lib [a-z]+\.c:\d+:\([a-z_]+\)/.test(chunk)) {
			return false;
		}

		return true;
	});

	return pumpify(split(), filterStream, map(chunk => `${chunk}\n`));
};

const cp = spawn(electron, process.argv.slice(2));

cp.stdout.pipe(removeJunk()).pipe(process.stdout);
cp.stderr.pipe(removeJunk()).pipe(process.stderr);
