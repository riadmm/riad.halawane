const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    setInterval(() => client.guilds.get('509014360950046736').roles.get('593038158485258240').setColor('RANDOM'), 900);
});





client.on('message', edited => {
    let args = edited.content.split(" ").slice(1).join(" ")
    if (edited.content.startsWith(prefix + '-سوي الوان يا بطل')) {
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



client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "𝐖𝐄𝐋𝐂𝐎𝐌𝐄-ٺــرحــيب");
    logChannel.send(`${member} Invited by: <@${inviter.id}>`);
  });
});






client.login(process.env.BOT_TOKEN);
