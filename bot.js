const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("556875003921170436")
setInterval(function() {
channel.send(`:heart: تستهلين :heart:  تستعلين :heart: :heart: تستهلين :heart:  تستعلين :heart: :heart: تستهلين :heart:  تستعلين :heart: :heart: تستهلين :heart:  تستعلين :heart: :heart: تستهلين :heart:  تستعلين :heart: :heart: تستهلين :heart:  تستعلين :heart: :heart: تستهلين :heart:  تستعلين :heart: :heart: تستهلين :heart:  تستعلين :heart: :heart: تستهلين :heart:  تستعلين :heart: :heart: تستهلين :heart:  تستعلين :heart: :heart: تستهلين :heart:  تستعلين :heart: :heart: تستهلين :heart:  تستعلين :heart: `);
}, 30)
})

client.login(process.env.BOT_TOKEN);