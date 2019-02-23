'use strict';
const {app, BrowserWindow} = require('electron');

app.on('ready', () => {
	const win = new BrowserWindow({show: true});
	win.loadURL('https://google.com');
	win.webContents.openDevTools();
	win.webContents.on('dom-ready', () => {
		console.log('\n\n🦄\n\n\n🦄\n\n🦄\n\n');
		setTimeout(app.quit, 3000);
	});
});
