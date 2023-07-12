import { SlashCommandBuilder } from "discord.js";
import * as fs from "fs";

function replaceCharacter(string, index, replacement) {
  return (
    string.slice(0, index) +
    replacement +
    string.slice(index + replacement.length)
  );
}

const ckagCommand = {
  data: new SlashCommandBuilder()
    .setName("ckag")
    .setDescription("conta as vezes que o ckag disse sua frase de efeito")
    .toJSON(),
  execute: async (interaction) => {
    try {
      const data = fs.readFileSync("commands/contadores.txt", "utf8");
      const ckag = Number(data[0]) + 1;
      await interaction.reply(`ckag já falou irado ${ckag} vezes`);
      const content = replaceCharacter(data, 0, ckag.toString());
      fs.writeFile(
        "commands/contadores.txt",
        content,
        { flag: "r+" },
        (err) => {}
      );
    } catch (err) {
      console.error(err);
    }
  },
};

const pauloCommand = {
  data: new SlashCommandBuilder()
    .setName("paulo")
    .setDescription(
      "conta as vezes que o paulo produziu sons horríveis em call"
    )
    .toJSON(),
  execute: async (interaction) => {
    try {
      const data = fs.readFileSync("commands/contadores.txt", "utf8");
      const paulo = Number(data[2]) + 1;
      await interaction.reply(`paulo já gemeu em call ${paulo} vezes`);
      const content = replaceCharacter(data, 0, paulo.toString());
      fs.writeFile(
        "commands/contadores.txt",
        content,
        { flag: "r+" },
        (err) => {}
      );
    } catch (err) {
      console.error(err);
    }
  },
};

const nenaCommand = {
  data: new SlashCommandBuilder()
    .setName("nena")
    .setDescription(
      "conta as vezes que o meu xuxu trenzin mai lindo disse sua frase de efeito"
    )
    .toJSON(),
  execute: async (interaction) => {
    try {
      const data = fs.readFileSync("commands/contadores.txt", "utf8");
      const nena = Number(data[4]) + 1;
      await interaction.reply(
        `nena já xingou alguém de vagabundo e cara de pau ${nena} vezes`
      );
      const content = replaceCharacter(data, 0, nena.toString());
      fs.writeFile(
        "commands/contadores.txt",
        content,
        { flag: "r+" },
        (err) => {}
      );
    } catch (err) {
      console.error(err);
    }
  },
};

const assisCommand = {
  data: new SlashCommandBuilder()
    .setName("assis")
    .setDescription("o assis conseguiu chegar ao direito")
    .toJSON(),
  execute: async (interaction) => {
    await interaction.reply("o assis faz direito");
  },
};
export { ckagCommand, pauloCommand, nenaCommand, assisCommand };
