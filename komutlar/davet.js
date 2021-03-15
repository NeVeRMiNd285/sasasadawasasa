const Discord = require('discord.js');

        exports.run = (client, message, args) => {
  
  const davet = new Discord.MessageEmbed()
  .setAuthor(`${client.user.username} Linkler`,client.user.avatarURL())
  .setColor('RANDOM')
    .setDescription(`[<a:sonsuz:810238916115955762> •Bot Siteye Taşındı!](https://rtx-pzel-bot.glitch.me/index.html)\n[<a:copadamnah:810936235093917696> •RTX Destek Sunucusu](https://rtx-pzel-bot.glitch.me/index.html)`)
    .setFooter(`RTX`)
    .setTimestamp()
    .setImage("https://cdn.discordapp.com/attachments/815651664606265383/815651734944219146/standard_1.gif")
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "dvt"
}