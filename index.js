"use strict";
var Cron = require('croner');
var child_process = require('child_process');
module.exports = function (homebridge) {
	console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!2222222222222222222222");
	const job = Cron('*/5 * * * * *', () => {
	});
	setTimeout(() => {
		console.log('Fallback. Soft restarting now (pkill -15 homebridge)');
        const kill = child_process.spawn('pkill', ['-15', 'homebridge']);
        kill.stdout.on('data', (data) => {
        	console.log(data.toString());
        });
        kill.stderr.on('data', (data) => {
        	console.log(data.toString());
		});
	}, 30000);
}; 