module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
        client.user.setActivity('gmod channel', { type: 'WATCHING' });
		console.log(`gmod bot online :)`);
    },
};