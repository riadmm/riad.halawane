const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    setInterval(() => client.guilds.get('509014360950046736').roles.get('593038158485258240').setColor('RANDOM'), 900);
});





client.on('message', edited => {
    let args = edited.content.split(" ").slice(1).join(" ")
    if (edited.content.startsWith(Prefix + '-ممكن تسوي الوان لعيون ديث جود')) {
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







client.login(process.env.BOT_TOKEN);
