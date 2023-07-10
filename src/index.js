const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.tag} está online`);
});

client.on("messageCreate", (msg) => {
  console.log(`${msg}`);
});

client.login(
  "MTEyODA3NTQ2NzAzMTg0Mjg4Ng.GtOSbl.OWXWzD85dwaK6a0DhNGbT9DCMtSl48ElV8J_PU"
);
