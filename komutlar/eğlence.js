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
.setTitle("**  » RTX Özel Bot Bot  **")
.setImage("https://cdn.discordapp.com/attachments/809356779011178536/814754799563177984/standard_1.gif")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://rtx-ozel-bot.glitch.me/support-server.html)** **•** **[Botun Davet Linki](https://rtx-ozel-bot.glitch.me/add-bot.html)** **•** **[Web-Site](https://rtx-ozel-bot.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: ** *yardım**

**•Komutlar**
> *zarat →  Zar atarsınız
> *kasaaç → CsGo kasası açmaya ne dersin?.
> *emojiyazı → Emojili yazı yazmaya ne dersin?.
> *espiri → Bot espiri yapar.
> *sor → Bot sorduğunuz soruya cevap verir.
> *vine → Bot size komik paylaşımlar gösterir.
> *balıktut → Dereden balık tutarsınız.
> *tersyazı →  Yazdığınız yazıyı bot tersten yazar.
> *mcskin →Yazdığınız ismin minecraft görünüşünü atar.
> *token →  Botun tokenini gösterir.
> *düello →  Arkadaşlarınızla düello yaparsınız.
> *extra →  Extra Komutları Görürsünüz.
> *wasted → Polis tarafından yakalanırsnız.
> *yumruk-at → Etiketlediğin kişiye bot yumruk atar.
> *yazan-kazanır → Yazan kazanır oyunu.
> *kapaklaf → Etiketlediğin kişiye bot kapaklaf söyler.
> *şanslısayım → Şanslı sayını bulmaya calışır.
> *kaçcm → Malafatını ölçer.

**• Bilgilendirme**
> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : RTX | Doruk Demirr*#2007**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2021 RTX Özel Bot | Tüm hakları saklıdır.
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
    name: 'eğlence', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};