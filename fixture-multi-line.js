'use strict';
const {app, BrowserWindow} = require('electron');

(async () => {
	await app.whenReady();

	const win = new BrowserWindow({show: true});
	await win.loadURL('https://google.com');
	win.webContents.openDevTools();
	console.log('\n\n🦄\n\n\n🦄\n\n🦄\n\n');
	setTimeout(app.quit, 3000);
})();
