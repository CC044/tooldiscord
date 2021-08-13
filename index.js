const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN);

const channel = client.channels.cache.get('609902022052806688');
console.log(`channel: ${channel}`);
//client.login('ODc1MjUyMDMxOTk5MzIwMDg0.YRSz-Q.cCd9NKqxENQ88kdpvkRnSS6Rc4g');
/*
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


// channel.send('content');
*/
