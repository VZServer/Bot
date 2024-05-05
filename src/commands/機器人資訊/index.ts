import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import infoEmbed from './embeds'

export const command = new SlashCommandBuilder()
  .setName('機器人資訊')
  .setDescription('看看機器人的身分證!')

export const action = async (ctx: ChatInputCommandInteraction) => {
  await ctx.reply({ embeds: [infoEmbed(ctx.client)] }) 
}
