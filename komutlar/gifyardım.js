const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const NARCOSEMBED = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » RTX Bot  **")
.setImage('https://cdn.discordapp.com/attachments/815651664606265383/815651734944219146/standard_1.gif')
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://rtx-pzel-bot.glitch.me/index.html)** **•** **[Botun Davet Linki](https://rtx-pzel-bot.glitch.me/index.html)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: ** *yardım**

**• Komutlar**
> *NSFW → NSFW gifler.
> *Woman → Kadın gif xd
> *Man → erkek gif xd
> *Baby → bebek gif xd
> *gifara → gif ararsınız
> *hayvan → Hayvan gifleri.
> *kemalsunal → **Kemal Sunal** gifleri.

`)
 

return message.channel.send(NARCOSEMBED)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'gifyardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};