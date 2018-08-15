const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});







client.on('ready', () => {
  client.user.setGame('الطفش قتلنا نبي شي يسلي','https://www.twitch.tv/peery13%27');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});





client.on("message", async message => {
if(message.content.startsWith("-embed")) {
let args = message.content.split(" ").slice(1).join(" ")
if(message.author.id != "394715584421429260") return;
if(!args) return message.reply("لالا دقيقه المفروض اني احط مسافه وبعدين كلام");
message.delete();
var emb = new  Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(args);
message.channel.send(emb)
}
})


client.login(process.env.BOT_TOKEN);
