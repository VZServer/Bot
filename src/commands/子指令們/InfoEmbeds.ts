import { EmbedBuilder, Client } from 'discord.js'
import gitRev from 'git-rev-sync'
import { stateColors } from '@/config/colors'
import { dateFormat } from '@/utils/date'

export default (client: Client<true>) => {
  return new EmbedBuilder()
    .setColor(stateColors.info)
    .setTitle(`${client.user?.username} 的資訊`)
    .addFields(
      // { name: '\u200B', value: '\u200B' }  // empty field,
      { name: '版本', value: gitRev.tag() },
    )
    .setFooter({ text: 'Made by VocalicZoo16918\nProladon for the framwork\nTime:'+dateFormat(dayjs().toDate()) })
}
