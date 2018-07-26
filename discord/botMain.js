const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})

client.on("ready", () => {
  console.log("Ready to run!");
  client.user.setGame("Minecrap")
})
client.on("message", message => {
   if(message.author.bot) return;
   if(message.channel.type === "dm") return;

   let messageArray = message.content.split(" ")
   let cmd = messageArray[0]
   let args = messageArray.slice(1);

   if(cmd === "ov>yeet") {
     message.channel.send(":ok_hand: :joy: :ok_hand:");
   }
})
client.login("token");
