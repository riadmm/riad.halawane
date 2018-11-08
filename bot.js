const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log('Online')
})

client.on('message', msg => {
  let role = msg.guild.roles.find('name', 'Rainbow');
  if (!role) return;
  if (msg.content === '-r') {
   
  setInterval( function r() {
      role.setColor('RANDOM');
    },1000);
  
  }
})




client.on('message', async rokz => {

    if(rokz.content.startsWith(prefix + "تقديم")) {

      let lang = '';

      let time = '';

      let expe = '';

      let fillter = m => m.author.id === rokz.author.id

      await rokz.channel.send("ما لغتك ؟").then(e => {

     rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {

       lang = co.first().content;

        co.first().delete();


       e.edit(`كم هي المدة ؟
[${lang}]`)

       rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })

       .then(col => {

         time = col.first().content;

          col.first().delete();


            e.edit(`ما هي خبرتك ؟
[${time}]
[${lang}]`)

            rokz.channel.awaitMessages(fillter, { time: 60000, max: 1 })

            .then(coll => {

              expe = coll.first().content;

               coll.first().delete();


               e.edit(`جاري تقديمك...
[${expe}]
[${time}]
[${lang}]`)

              let rokzz = rokz.guild.channels.find("name","التقديمات")

              setTimeout(() => {

                e.edit("تم التقديم")

              }, 3000)

              rokzz.send(`
» اللغة : **${lang}**
» المدة : **${time}**
» الخبرة : **${expe}**
تم التقديم بواسطة: ${rokz.author}
`).then(rokzzz => {

                  rokzzz.react("✅")

                  rokzzz.react("❌")

                })

            })

       })

     })

   })

    }

  })





client.on('message',async message => {

  let mention = message.mentions.members.first();
  
  let Room = client.channels.get('507671958792437761');
  
  if(message.content.startsWith("رفض")) {
  
  if(message.guild.id !== 'ايدي السيرفر') return;
  
   if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));
  
  
  if(!mention) return message.reply("منشن شخص");
  
  
  
  Room.send(`
  **» العضو :** ${mention}
  [ :x: ] :: لقد تم رفض العضو`);
  
  }
  
  });
        
client.on('message',async message => {

  let mention = message.mentions.members.first();
  
  let Room = client.channels.get('510128984542019614');
  
  if(message.content.startsWith ("قبول")) {
  
  
   if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));
  
  
  if(!mention) return message.reply("منشن شخص");
  
  
  
  Room.send(`
  **» العضو :** ${mention}
  [ :white_check_mark: ] :: لقد تم قبول العضو واعطائه رتبة سبورت`);
  
  }
  
  });


client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**هل انت متاكد من مسح الشات؟`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`سوف يمسح الشات`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "``تــم مسح الشات ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**تم الغاء مسح الشات**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

  



client.login(process.env.BOT_TOKEN);
