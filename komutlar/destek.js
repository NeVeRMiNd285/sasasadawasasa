

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
        .setAuthor('RTX Destek Menüsü')
        .setImage('https://cdn.discordapp.com/attachments/815651664606265383/815651734944219146/standard_1.gif')
        .setDescription('<a:sonsuz:810238916115955762> Botu Davet Etmek İçin `*dvt` yazabilirisiniz.',false)        
        .addField('**<a:tac:807285920909885442>*çağır**', ' `Botun Sahibini Çağırırsınız(Botun Sahibi Size Biraz Geç Dönebilir).`',false)        
        .addField('**<a:sonsuz:810238916115955762>Bilgilendirme**', '>  `*dvt` | RTX Botu Sunucunuza Davet Edersiniz.\n`*web` | RTX Botun Web Sitesi.\n<a:tac:807285920909885442> `*i` | Botun İstatistiklerini Görürsünüz.`',true)
        
  
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['destek', 'dstk','dst'],
  kategori: 'Destek',
  permLevel: 0
};
exports.help = {
  name: 'destek',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'destek'
};