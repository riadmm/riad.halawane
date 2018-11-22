const Discord = require('discord.js');
const client = new Discord.Client();


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

    if(rokz.content.startsWith("-تقديم")) {

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
  
  let Room = client.channels.get('510128984542019614');
  
  if(message.content.startsWith ("قبول")) {
  
  
   if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));
  
  
  if(!mention) return message.reply("منشن شخص");
  
  
  
  Room.send(`
  **» العضو :** ${mention}
  [ :white_check_mark: ] :: لقد تم قبول العضو واعطائه رتبة سبورت`);
  
  }
  
  });



  

client.on('message',async message => {

  let mention = message.mentions.members.first();
  
  let Room = client.channels.get('510128984542019614');
  
  if(message.content.startsWith("رفض")) {
  
  if(message.guild.id !== '507671958792437761') return;
  
   if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("**للأسف ليس لديك صلاحية**").then(msg => msg.delete(5000));
  
  
  if(!mention) return message.reply("منشن شخص");
  
  
  
  Room.send(`
  **» العضو :** ${mention}
  [ :x: ] :: لقد تم رفض العضو`);
  
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






   





client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == 'لون'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**لا يوجد لون بهذا الأسم ** ❌ `)
   .setColor(`ff0000`)
 
    if(!isNaN(args) && args.length > 0)
   
 
if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
 
 
       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                   
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Done , تم تغير لونك . ✅ **`)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
         
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
       
           
    }
});

               
               
               







const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === "general");
    logChannel.send(`${member} Invited by: <@${inviter.id}>`);
  });
});








client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'general');
    let memberavatar = member.user.avatarURL
      if (!channel) return; 
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر ي قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                      
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("**SERVER NAME **")
        .setTimestamp()
    
      channel.sendEmbed(embed);
    });
    





   if (message.content === "$help") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setFooter(`© SHYBOY_05 ™.`, 'https://images-ext-2.discordapp.net/external/X9SanEG0s7Dtv3krTgy-kod_fj6JRVJ2AG4JryCiiz0/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/375761288518828042/fffa31c797e88cf059dd6db424ff456a.png?width=80&height=80')
  .setColor("#000000")
  .addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3:شيك علي في الخاص")
  
  
  
  message.channel.sendEmbed(embed);
  }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   client.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setDescription(`**❓❔❗️❕وش مميزات البوت❗️❕❓❔**
        **__1-__:books:🧐 بوت عربي🧐:books:
         __2-__:white_check_mark: :part_alternation_mark:️ استخدامه جدا سهل:part_alternation_mark:️:white_check_mark: 
         __3-__:gear:️صيانه كل يوم:gear:️
         __4-__:money_with_wings: مجاني :money_with_wings:**`)
   message.author.sendEmbed(embed)
   
   }
   });
  

  
   
  
  
  
   client.on("message", message => {
      if (message.content === "$help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF0000")
           .setDescription(`**🕴🏾الاوامر العامة|Public Commands🕴🏾**
  ** __$id__->**معلومات عنك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$server__->**معلومات عن السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$Bot__->**معلومات عن البوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$mb__->**حالة اعضاء السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$ping__->**سرعة اتصالك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$av__->**صورتك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
   **__$as__->**صورة السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$say__->**لعبة مريم المخيفه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$dt__->**الاوقات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$stats__->**معلومات خفيفه عن البوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$ut__->**معلومات قليله عن البوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$roll__->**يسوي قرعه من 1 الى 100
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$roles__->**يظهر لك عدد الرتب
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$help__->**تظهر لك هذي القائمة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- `)
     message.author.sendEmbed(embed)
     
     }
     });
  
  
  
  
   client.on("message", message => {
    if (message.content === "$help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#FFFF00")
         .setDescription(`**:video_game:   الالعاب|Games**
  ** __$hack__->**لعبة هكر مزح
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __$cut__->**لعبة أسئله
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __$a4kar__->**اذكار
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$5wa6r__->**حكم وخواطر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$7b__->**كلام غزل او بيت شعر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$mrym__->**لعبة مريم المخيفه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$sra7a__->**يسألك سؤال ولازم تجاوب بصراحه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$wyr__->**لو خيروك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$38ab__->**يطرح لك عقابات مختلفه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$animal__->**صور حيوانات كيوت ههه
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)
   message.author.sendEmbed(embed)
   
   }
   });
  
  
  
   client.on("message", message => {
      if (message.content === "$help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#57FEFF")
           .setDescription(`**⚙️اوامر الادارة|Administrator⚙️**
  ** __$kick__->**طرد
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$ban__->**باند
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$mu__->**ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$unmu__->**فك ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$much__->**قفل الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$unmuch__->**فتح الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$cl__->**حذف الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$ce__->**حذف الشات بعدد
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __$ct__->**انشاء شات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$cv__->**انشاء روم
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$de__->**حذف روم او شات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$wlc__->**ترحيب خفيف لطيف
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$bc__->**برود كاست 
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__$bc2__->**برود كاست نوع اخر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-`)
     message.author.sendEmbed(embed)
     }
     });
  
  
  
  
  
  
  
     client.on("message", message => {
      if (message.content === "$help") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By Yo[S]siF#0008 ')
           .setDescription(`**__أتمنى يعجبكم البوت يا أغلى ناس ❤️ 💛 💚 💙 💜 🖤__**`)
     message.author.sendEmbed(embed)
     
     }
     });








client.login(process.env.BOT_TOKEN);
