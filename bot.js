const Discord = require('discord.js');
const client = new Discord.Client();
 
var id = ['466007216546119681'] //تذكر إذا كنت تبي تضيف شخص معاك حط فاصله وبعدين العلامه '
var initcmd = '#'
const developers = 466007216546119681
const adminprefix = initcmd;
client.on('message', message => {
    var argresult = message.content.split(' ').slice(2).join(" ")
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'ply')) {
    if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else
  if (message.content.startsWith(adminprefix + 'wat')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
 
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else
  if (message.content.startsWith(adminprefix + 'lis')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
 
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
 
    client.user.setGame(argresult, "https://www.twitch.tv/fadi_games2");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'name')) {
        if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
 
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'avatar')) {
      if (!argresult) return message.channel.send(':no_entry: | يرجى كتابة أي شيء بعد ألأمر')
 
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});



  



client.login(process.env.BOT_TOKEN);
