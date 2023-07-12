import {
  Client,
  IntentsBitField,
  Routes,
  SlashCommandBuilder,
  ChannelType,
} from "discord.js";

import { config } from "dotenv";
import { REST } from "@discordjs/rest";
import {
  ckagCommand,
  pauloCommand,
  nenaCommand,
  assisCommand,
} from "../commands/catchphrases/index.js";
import { joinVoiceChannel } from "@discordjs/voice";
import { joinCommand } from "../commands/gragas/index.js";

//config para o .env
config();

//tokens
const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

//inicialização client
export const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});
//inicialização do rest
const rest = new REST({}).setToken(TOKEN);

//comandos e interações
const commands = [
  ckagCommand.data,
  pauloCommand.data,
  nenaCommand.data,
  assisCommand.data,
  joinCommand.data,
];
const interactions = [
  ckagCommand.execute,
  pauloCommand.execute,
  nenaCommand.execute,
  assisCommand.execute,
  joinCommand.execute,
];

async function main() {
  try {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
    client.login(TOKEN);
  } catch (err) {
    console.log(err);
  }
}

main();

client.on("ready", (c) => {
  console.log(`${c.user.tag} está online`); //
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand) {
    return;
  }
  for (var i = 0; i < commands.length; i++) {
    if (commands[i].name == interaction.commandName) {
      interactions[i](interaction);
    }
  }
});
