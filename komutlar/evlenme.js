const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {/*

A gift from chimp#0110 to all codare members                                                                                                 */  

if(!args[0]) return message.channel.send(`Hayatının aşkını etiketlemelisin. \`❤️\``)
let mention = message.mentions.users.first()
if(!mention) return message.channel.send(`Hayatının aşkını bulamadım.. \`💔\``)
  
message.channel.send(`${mention}, bak bu ${message.author.username} seninle evlenmek istiyor.
(ben olsam hemen tik işaretine tıklardım, bu çocuk kaçmaz)`).then(async chimp => {
  
chimp.react(`✅`)
chimp.react(`❌`)

let evet_Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id !== client.user.id && user.id === mention.id
let evet = chimp.createReactionCollector(evet_Filter, { time: 0 });
  
let hayır_Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id !== client.user.id && user.id === mention.id
let hayır = chimp.createReactionCollector(hayır_Filter, { time: 0 });
  
  
  
evet.on("collect", async reaction => {
  
let user = reaction.users.last()
if(user.id !== mention.id) return;
  
  chimp.reactions.get(`✅`).removeAll()
  chimp.reactions.get(`❌`).removeAll()
  chimp.edit(`${message.author.username.toUpperCase()} OHA KABUL ETTİ, ARTIK ${mention.username.toUpperCase()} İLE SONSUZA KADAR BERABER OLACAKSIN! \`❤️\``)
  message.guild.members.get(message.author.id).setNickname(`${mention.username}'nin papatyası`)
  message.guild.members.get(mention.id).setNickname(`${message.author.username}'nin çiçeği`)
  
})
  
hayır.on("collect", async reaction => {
  
let user = reaction.users.last()
if(user.id !== mention.id) return;
  
  chimp.reactions.get(`✅`).removeAll()
  chimp.reactions.get(`❌`).removeAll()
  chimp.edit(`${message.author}, üzgünüm.. \`💔\``)
  mention.send(`orospu çocuğu, niye kabul etmiyon?`)
  
})
  
  
})
  
  
};
exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: ['evlenmeteklifi'],
  permLevel: 0
};

exports.help = {
  name: 'evlenme-teklifi'
};// codare