const { Client, Intents } = require('discord');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.login('ODc1MjUyMDMxOTk5MzIwMDg0.YRSz-Q.cCd9NKqxENQ88kdpvkRnSS6Rc4g');
/*
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.TOKEN);

const channel = client.channels.cache.get('609902022052806688');
console.log(`channel: ${channel}`)
// channel.send('content');
*/
