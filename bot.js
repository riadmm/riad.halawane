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
  
  if(message.guild.id !== '507671958792437761') return;
  
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

  

client.on('message', async message =>{
  var prefix = "-";
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});



client.on('message', message => {

    if (message.content.startsWith("-avatar")) {

        if (message.author.bot) return

        var mentionned = message.mentions.users.first();

    var omar;

      if(mentionned){

          var omar = mentionned;

      } else {

          var omar = message.author;

          

      }

        const embed = new Discord.RichEmbed()

        .setColor("RANDOM")

        .setAuthor('Avatar Link :')

        .setTitle('Click Here')

        .setURL(`${omar.avatarURL}`)

        .setImage(`${omar.avatarURL}`)

        .setFooter('King-bot',client.user.avatarUR8L) 

      message.channel.sendEmbed(embed);

    }

});






client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.split(' ')[0] == '-sug') 
    var embed = new Discord.RichEmbed()

    .setColor('RANDOM')
    .addField('New Suggestion',`${args}`,true)
    .addField('By',`${message.author.tag}`,true)
    .setTimestamp()

    let suggests = message.guild.channels.find(`name`, "اقتراحات");
    suggests.send(embed).then(msg => {
        msg.react('✅')
    .then(() => msg.react('❌'))
    })

});





    
    client.on('message', message=>{
    if (message.content === 'سوي الوان'){
    if(!message.channel.guild) return;
    if (message.member.hasPermission('MANAGE_ROLES')){
    setInterval(function(){})
    let count = 0;
    let ecount = 0;
    for(let x = 1; x < 200; x++){
    message.guild.createRole({name:x,
    color: 'RANDOM'})
    }
    }
    }
    });






client.on('message', message => {
    if (message.content.startsWith("-hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص التريد تهكره``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦¦ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم التهكير')
           }, 6000)
           });
         }
 });






        
              
                 
           


client.on('message', async message =>{
  if (message.author.boss) return;
    var prefix = "-";

if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    if (command == "warn") {
        if (!message.channel.guild) return;
        if(!message.guild.roles.find(r => r.name === 'warns')); //code by iBeAnthonyD
        if(!message.guild.roles.find(r => r.name === 'warns')); //code by iBeAnthonyD
        let user = message.mentions.users.first();
        if (message.mentions.users.size < 1) return message.reply(' يجب عليك المنشن اولاً ').then(msg => {msg.delete(5000)});
        let reason = message.content.split(" ").slice(2).join(" ");
        const muteembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(Warned!, user.displayAvatarURL)
        .setThumbnail(user.displayAvatarURL)
        .addField("👥  المستخدم",  '[ ' + ${user.tag} + ' ]',true)
        .addField("🔨  تم بواسطة ", '[ ' + ${message.author.tag} + ' ]',true)
        .addField("📖  السبب", '[ ' + ${reason} + ' ]',true)
        .addField("User", user, true)
        message.channel.send({embed : muteembed});
        var muteembeddm = new Discord.RichEmbed()
        .setAuthor(Warned!), user.displayAvatarURL)
        .setDescription(${user} تم اعطائك تحذير
${message.author.tag}  بواسطة
[ ${reason} ] : السبب
اتمنى ان لا يتكرر هذا الغلط مجددا)
        .setFooter(في سيرفر : ${message.guild.name})
        .setColor("RANDOM")
    user.send( muteembeddm);
  }
  });








client.login(process.env.BOT_TOKEN);
