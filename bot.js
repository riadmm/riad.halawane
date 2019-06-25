const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
    setInterval(() => client.guilds.get('509014360950046736').roles.get('593038158485258240').setColor('RANDOM'), 900);
});







		client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const xkiller = member.guild.channels.find("name", "𝐖𝐄𝐋𝐂𝐎𝐌𝐄-ٺــرحــيب");
     xkiller.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
  });
});















client.login(process.env.BOT_TOKEN);
