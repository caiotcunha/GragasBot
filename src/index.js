import {
  Client,
  IntentsBitField,
  Routes,
  SlashCommandBuilder,
} from "discord.js";

import { config } from "dotenv";
import { REST } from "@discordjs/rest";
import { pingCommand } from "../commands/members/index.js";

config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const rest = new REST({}).setToken(TOKEN);

client.on("ready", (c) => {
  console.log(`${c.user.tag} está online`); //
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand) {
    return;
  }
  interaction.reply({ content: "hey" });
});

async function main() {
  const commands = [pingCommand];
  try {
    console.log("started commands");
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
    client.login(TOKEN);
  } catch (err) {
    console.log(err);
  }
}

main();

//contadores let
// let ckag = 0;
// let paulo = 0;
// let nena = 0;

// try {
//   const data = fs.readFileSync("src/contadores.txt", "utf8");
//   ckag = Number(data[0]);
//   paulo = Number(data[2]);
//   nena = Number(data[4]);
// } catch (err) {
//   console.error(err);
// }

// const connection = joinVoiceChannel({
//   channelId: channel.id,
//   guildId: channel.guild.id,
//   adapterCreator: channel.guild.voiceAdapterCreator,
// });

// client.on("messageCreate", (msg) => {
//   //check if message is a human
//   if (msg.author.bot) {
//     return;
//   }

//   //regex to catch "catch phrase"
//   const ckagRegex = /^-\w*ckag/;
//   const nenaRegex = /^-\w*nena/;
//   const pauloRegex = /^-\w*paulo/;
//   const assisRegex = /^-\w*assis/;
//   if (ckagRegex.test(msg.content)) {
//     ckag = ckag + 1;
//     msg.reply(`ckag já falou irado ${ckag} vezes`);
//     const content = `${ckag},${paulo},${nena}`;
//     fs.writeFile("src/contadores.txt", content, { flag: "r+" }, (err) => {});
//   } else if (pauloRegex.test(msg.content)) {
//     paulo = paulo + 1;
//     msg.reply(`paulo já gemeu em call ${paulo} vezes`);
//     const content = `${ckag},${paulo},${nena}`;
//     fs.writeFile("src/contadores.txt", content, { flag: "r+" }, (err) => {});
//   } else if (assisRegex.test(msg.content)) {
//     msg.reply(`o assis faz direito.`);
//   } else if (nenaRegex.test(msg.content)) {
//     nena = nena + 1;
//     msg.reply(`nena já xingou alguém de vagabundo e cara de pau ${nena} vezes`);
//     const content = `${ckag},${paulo},${nena}`;
//     fs.writeFile("src/contadores.txt", content, { flag: "r+" }, (err) => {});
//   } else if (msg.content == "-join") {
//     console.log(msg);
//     const connection = joinVoiceChannel({
//       channelId: "351168962249359361",
//       guildId: "351168961557037065",
//       adapterCreator: channel.guild.voiceAdapterCreator,
//     });
//   }
// });

//351168962249359361
