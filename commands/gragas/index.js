import { joinVoiceChannel } from "@discordjs/voice";
import { ChannelType, SlashCommandBuilder } from "discord.js";
const joinCommand = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("o bot entra na sala especificada")
    .addChannelOption((option) =>
      option
        .setName("canal")
        .setDescription("canal para entrar")
        .setRequired(true)
        .addChannelTypes(ChannelType.GuildVoice)
    )
    .toJSON(),
  execute: async (interaction) => {
    const voiceChannel = interaction.options.getChannel("canal");
    const voiceConnection = joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: interaction.guildId,
      adapterCreator: interaction.guild.voiceAdapterCreator,
    });
  },
};
export { joinCommand };
