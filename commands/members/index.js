import { SlashCommandBuilder } from "discord.js";

const pingCommand = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("replies with pong")
  .toJSON();

export { pingCommand };
