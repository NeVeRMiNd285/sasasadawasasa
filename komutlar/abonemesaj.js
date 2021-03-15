const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const exampleEmbed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle(`${client.user.username}`)
 .setDescription(`• Abone Rolü •

Abone Rolü Almak İçin Yapmanız Gerekenler
•<#819232897172897810> kanalına abone olduğunuza dair,like attığınıza dair ve yorum attığınıza dair bir ss atınız.

• Yetkililer Sizinle İlgilenecektir Eğer 1 Dk İçinde İlgilenmezler İse Yetkilileri Etiketleyebilirsiniz.`)
.setImage("https://cdn.discordapp.com/attachments/817828004100177940/817828089563185162/standard_1.gif")
  message.channel.send(exampleEmbed)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'abonemesaj',
  description: 'abone kuralları atar',
  usage: 'abonemesaj'
}; 