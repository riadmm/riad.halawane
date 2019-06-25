const Discord = require('discord.js');
const client = new Discord.Client();




  client.on('message', message => {
  if(message.content === prefix + '*ورع سوي الوان لا أصنك كف') {
  if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**');
let menu = new Discord.RichEmbed()
.setImage('https://www6.0zz0.com/2019/05/22/14/265175773.png')
.setFooter('Colors Menu')
message.channel.sendEmbed(menu)
}})


		






client.login(process.env.BOT_TOKEN);
