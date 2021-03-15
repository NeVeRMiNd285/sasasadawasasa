const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const lelyss = moment
  

const uptime = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]"); 
  


  


    const embed = new Discord.MessageEmbed()
        .setColor('PİNK')
    
        .setTitle('RTX İstatistik Menüsü')
    .addField("**__Sahip Geliştirici__**",`        <a:kraltac:819242039081697322> Bot Sahip : <@718528038916063242>
        <a:kraltac:819242039081697322> Bot Geliştirici : <@718528038916063242>`)
    .addField("**__Bot Bilgi__**",`
       <a:uyari:807288324212523008> Prefix : ** * **
       <a:uyari:807288324212523008> Bot Dil : <a:turkbayragi:807285948562931764>
       <a:uyari:807288324212523008> Komut Sayısı : **${client.commands.size}**`,true)
    .addField("**__Sunucu/Kullanıcı__**",` 
       <a:hype:808432695151296522> Toplam Sunucular : **${client.guilds.cache.size}**
       <a:hype:808432695151296522> Toplam Kullanıcılar :  **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**`,true)
    
    
    
    
    .addField("**__Sürümler__**",`       <a:mavionay:819241950657904670> Discord.js :  **v${Discord.version}**
       <a:mavionay:819241950657904670> Node.js : **${process.version}**`,true)
        .addField("**__Gecikmeler__**", `<a:uptime:819242012058320896> Ping : **${client.ws.ping}** MS 
        <a:uptime:819242012058320896> Uptime : ${uptime}
        `,true)
         .addField("**__Linkler__**", `
         <a:giris:819241987261464617> Rollü Davet [Tıkla!](https://rtx-pzel-bot.glitch.me/) 
         <a:zil:807286166319136784> Rolsüz Davet [Tıkla!](https://discord.com/api/oauth2/authorize?client_id=807993666165276674&permissions=0&redirect_uri=https%3A%2F%2Frtx-pzel-bot.glitch.me%2Findex.html&scope=bot)
         <a:hype:808432695151296522> Destek Sunucum [Tıkla!](https://rtx-pzel-bot.glitch.me/)`,true)
    .addField("**__YouTube__**",`
   <a:hype:808432695151296522> [Yavuzhan.exe](https://www.youtube.com/c/Yavuzhanexe/videos)    |      [Doruk Demir](https://www.youtube.com/channel/UCMv_35aYVIH38GZLSiQbhbw/videos)`,true)


   
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0,
};

exports.help = {
  name: 'istatistik',
  description: 'i',
  usage: 'i'
};