import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { SelfInfo, SelfBotInfo, GuildInfo } from './subCommands'

export const command = new SlashCommandBuilder()
  .setName('資訊')
  .setDescription('整合版資訊功能')
  .addSubcommand((sub) => sub.setName('本機器人').setDescription('查看本機器人的身分證uwu'))
  .addSubcommand((sub) => sub.setName('您個人').setDescription('查看您自己的身分證uwu'))
  .addSubcommand((sub) => sub.setName('群組').setDescription('查看本群組的戶口名簿uwu'))

export const action = async (ctx: ChatInputCommandInteraction) => {
  const cmdName = ctx.options.getSubcommand()
  await ctx.deferReply()

  switch (cmdName) {
    case '本機器人':
      await SelfBotInfo(ctx)
      break
    case '您個人':
      await SelfInfo(ctx)
      break
    
    case '群組':
      await GuildInfo(ctx)
      break
  }
}
