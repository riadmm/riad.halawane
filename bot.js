client.on('ready', () => {
  console.log('Online')
})

client.on('message', msg => {
  let role = msg.guild.roles.find('name', 'Rainbow');
  if (!role) return;
  if (msg.content === 'Rainbow') {
   
  setInterval( function r() {
      role.setColor('RANDOM');
    },1000);
  
  }
})







const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const prefix = "!";







client.login(process.env.BOT_TOKEN);
