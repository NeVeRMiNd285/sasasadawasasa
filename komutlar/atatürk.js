const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var request = require("request");


exports.run = (client, message, params) => {
  const png = "https://i.pinimg.com/originals/de/1a/54/de1a541dcb7e3644d89aa67b6c5f7e17.gif" || "https://static.euronews.com/articles/stories/04/28/74/76/773x435_cmsv2_da56396a-17f3-528b-a15c-44e12dfd9033-4287476.jpg"
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL())
      .addField("Eğlence Komutları Özel Mesajlarda Kullanılamaz!");
    return message.author.send(ozelmesajuyari);
  } 
  if (message.channel.type !== "dm") {
    const nataturk = new Discord.MessageEmbed()
    .setAuthor(" Sen Olmasaydın Biz Ne Yapardık :(")
      .setColor(0xffffff)
      .setTimestamp()
      .setDescription("")
      .setImage(png);
    return message.channel.send(nataturk);
  }
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "atatürk",
  description: "atatürk",
  usage: "atatürk"
};