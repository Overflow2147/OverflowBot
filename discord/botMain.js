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
     message.channel.send(":ok_hand: :joy: :ok_hand: :100:");
   }
   if(cmd === "ov>help") {
     message.channel.send("List of modules: \n \n :one:   Basic \n :two:   Memes \n \n Type ov>mhelp [module name] to get a list of commands in a specific module.")
   }
   if(cmd === "ov>mhelp") {
     if(args[0] === "Basic") {
       message.channel.send("List of commands in Basic module: \n \n ov>help - Display the list of modules. \n ov>mhelp [module name] - Display the list of commands in a specific module.")
     }
     if(args[0] === "Memes") {
       message.channel.send("List of commands in Memes module: \n \n ov>yeet - Makes the bot to what")
     }
   }
})
client.login("token");
