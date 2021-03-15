const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:811199779454713867> Botlist Yardım Komutları')
.setTimestamp()
.addField('<a:maviyildiz:811199779454713867> *bot-onayla botid sahipid ', 'Botu Onaylarsınız')
.addField('<a:maviyildiz:811199779454713867> *bot-reddet botid sahipid sebep', 'Botu Reddedersiniz')
.addField('<a:maviyildiz:811199779454713867> *bot-ekle', 'Bot eklersiniz')
.addField('<a:maviyildiz:811199779454713867> *botlist-ayar', 'Ayarlama Komutlarını Gösterir')
.setImage('https://cdn.discordapp.com/attachments/815651664606265383/815651734944219146/standard_1.gif')
.setFooter('RTX', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'botlist-yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};