const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})

client.on("ready", () => {
  console.log("Ready to run!")
})
client.login("token");
