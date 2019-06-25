const Discord = require('discord.js');
const client = new Discord.Client();



client.on('message', message => {//new msg event
                if(!message.channel.guild) return;
                  if(message.content.startsWith(prefix + '-شغل')) {//to create the rainbow role
                      let role = message.guild.roles.find('name', 'Rainbow')
                    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
                  //start of create role 
                  if(!role){
                    rainbow =  message.guild.createRole({
                   name: "Rainbow bot.",//the role will create name
                   color: "#000000",//the default color
                   permissions:[]//the permissions
                 //end of create role
                })

                }
                message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
                }})

                client.on('ready', () => {//new ready event
                  setInterval(function(){
                      client.guilds.forEach(g => {
                                  var role = g.roles.find('name', 'Rainbow');//rainbow role name
                                  if (role) {
                                      role.edit({color : "RANDOM"});
                                  };
                      });
                  }, 3000);//the rainbow time
                })





client.login(process.env.BOT_TOKEN);
