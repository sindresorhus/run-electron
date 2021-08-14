#!/usr/bin/env node
import electron from 'electron';
import {spawn} from 'node:child_process';
import process from 'node:process';
import split from 'split2';
import filter from 'through2-filter';
import map from 'through2-map';
import pumpify from 'pumpify';

process.env.FORCE_COLOR = '1';

const removeJunk = () => {
	const filterStream = filter({wantStrings: true}, chunk => {
		// Example: 2018-08-10 22:48:42.866 Electron[90311:4883863] *** WARNING: Textured window <AtomNSWindow: 0x7fb75f68a770>
		if (/\d+-\d+-\d+ \d+:\d+:\d+\.\d+ Electron(?: Helper)?\[\d+:\d+] /.test(chunk)) {
			return false;
		}

		// Example: [90789:0810/225804.894349:ERROR:CONSOLE(105)] "Uncaught (in promise) Error: Could not instantiate: ProductRegistryImpl.Registry", source: chrome-devtools://devtools/bundled/inspector.js (105)
		if (/\[\d+:\d+\/|\d+\.\d+:ERROR:CONSOLE\(\d+\)]/.test(chunk)) {
			return false;
		}

		// Example: ALSA lib confmisc.c:767:(parse_card) cannot find card '0'
		if (/ALSA lib [a-z]+\.c:\d+:\([a-z_]+\)/.test(chunk)) {
			return false;
		}

		return true;
	});

	return pumpify(split(), map(chunk => `${chunk}\n`), filterStream);
};

const subprocess = spawn(electron, process.argv.slice(2));

subprocess.stdout.pipe(removeJunk()).pipe(process.stdout);
subprocess.stderr.pipe(removeJunk()).pipe(process.stderr);
