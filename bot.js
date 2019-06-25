const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    setInterval(() => client.guilds.get('509014360950046736').roles.get('593038158485258240').setColor('RANDOM'), 900);
});





client.on('message', edited => {
    let args = edited.content.split(" ").slice(1).join(" ")
    if (edited.content.startsWith(prefix + '-ممكن تسوي الوان لعيون ديث جود')) {
        if (!args) return edited.channel.send('**:information_source: |  أكتب عدد الألوان التي تريدها مع الأمر**');
        if (!edited.member.hasPermission('MANAGE_ROLES')) return;
        edited.channel.send(`**${Check} | تم صنع :  \`${args}\` لون**`);
        setInterval(function () {})
        let count = 0;
        let ecount = 0;
        for (let x = 1; x < `${parseInt(args)+1}`; x++) {
            edited.guild.createRole({
                name: x,
                color: 'RANDOM'
            })
        }
    }
});





client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("509014360950046736");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});



client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("592732288824115241");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("509014360950046736");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;         
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});



    var prefix = "-";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'أمسح يا سمسم')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
 
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();
 
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {
 
        }
      }}).then(msg => {msg.delete(3000)});
 
})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});




client.login(process.env.BOT_TOKEN);
