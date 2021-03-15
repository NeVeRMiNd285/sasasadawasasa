

const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('GOLD')
        .setFooter(`${msg.author.username} Başarıyla Yardım Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('RTX Yardım Menüsü')
        .setImage('https://cdn.discordapp.com/attachments/815651664606265383/815651734944219146/standard_1.gif')
        .setDescription('<a:sonsuz:810238916115955762> Botu Davet Etmek İçin `*davet` yazabilirisiniz.',false)
        .addField('**<a:can:807286554959413290>*abone-yetkili-rol @rol**', ' `Abone Yetkili Rolünü Ayarlarsınız.`',false)
        .addField('**<a:tac:807285920909885442>*abone @üye**',' `Etiketlediğiniz Kişiye Abone Rolünü Verirsiniz.`',false )
        .addField('**<a:copadamnah:810936235093917696>*abonelog #kanal**',' `Abone Log Kanalı Ayarlarsınız.`',false )
        .addField('**<a:can:807286554959413290>*abonerol**',' `Abone Rolünü Ayarlarsınız.`',false )
        .addField('**<a:sonsuz:810238916115955762>Bilgilendirme**', '>  `*dvt` | RTX Botu Sunucunuza Davet Edersiniz. \n<a:tac:807285920909885442> `*is` | Botun İslatistiklerini Görürsünüz.`',true)
        
  
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['abone-yardım', 'ay','a-y'],
  kategori: 'aboneyardım',
  permLevel: 0
};
exports.help = {
  name: 'aboneyardım',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'aboneyardım'
};