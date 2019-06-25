const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    setInterval(() => client.guilds.get('509014360950046736').roles.get('593038158485258240').setColor('RANDOM'), 300);
});




client.login(process.env.BOT_TOKEN);
