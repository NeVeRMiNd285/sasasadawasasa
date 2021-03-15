const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » RTX Bot  **")
.setImage("https://cdn.discordapp.com/attachments/809356778483220510/814765377891336212/standard_1.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://rtx-ozel-bot.glitch.me/support-server.html)** **•** **[Botun Davet Linki](https://rtx-ozel-bot.glitch.me/add-bot.html)** **•** **[Web-Site](https://rtx-ozel-bot.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: ** *yardım**

**• Komutlar**
> *kedi → Kedi Gifi.
> *köpek → Köpek Gifi.
> *tavşan → Tavşan Gifi.
> *inek → İnek Gifi. 
> *maymun → Maymun Gifi.


**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : ! RTX | Doruk Demirr#9842**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2021 RTX | Tüm hakları saklıdır.
`)
 
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'hayvan', 
    description: 'hayvan gif Listesini Gösterir!',
    usage: '+hayvan'
};