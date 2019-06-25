const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    setInterval(() => client.guilds.get('509014360950046736').roles.get('593038158485258240').setColor('RANDOM'), 900);
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
