import { ChatInputCommandInteraction } from 'discord.js'
import {useAppStore} from '@/store/app'

const appStore = useAppStore()
const client:any = appStore.client

export const SelfInfo = async (ctx: ChatInputCommandInteraction) => {
  await ctx.editReply(`使用者名稱：${ctx.user.username}\n`+
  `使用者ＩＤ：${ctx.user.id}\n`+
  `使用者創建時間：<t:${~~(ctx.user.createdTimestamp/1000)}:R>\n`+
  `是否為機器人：${ctx.user.bot? '是':'否'}\n`)
}

export const SelfBotInfo = async (ctx: ChatInputCommandInteraction) => {
  // function msToHMS(ms:any) {
  //   let seconds:number = ms / 1000; //將毫秒轉換為秒
  //   const hours:number= parseInt( seconds / 3600 ); //將可以轉為小時的秒轉換為小時
  //   seconds = seconds % 3600; //去除已轉換為小時的秒
  //   const minutes = parseInt( seconds / 60 ); //將可以轉為分鐘的秒轉換為分鐘
  //   seconds = seconds % 60; //去除已轉換為分鐘的秒
  //   return(`${hours}:${minutes}:${~~(seconds)}`); //回傳轉換後的結果，秒數進行四捨五入
  // }
  function msToHMS(ms: number) {
    let seconds = ms / 1000; // Convert milliseconds to seconds
    const hours = Math.floor(seconds / 3600); // Get the number of hours
    seconds = seconds % 3600; // Remove the hours from the total seconds
    const minutes = Math.floor(seconds / 60); // Get the number of minutes
    seconds = seconds % 60; // Remove the minutes from the total seconds
    return `${hours}:${minutes.toString().padStart(2, '0')}:${Math.floor(seconds).toString().padStart(2, '0')}`; // Return the formatted time
  }
  await ctx.editReply(`機器人名稱：${client.user.username}\n`+
  `機器人ＩＤ：${client.user.id}\n`+
  `機器人製作者：自行填寫\n`+
  `機器人建立時間：<t:${~~(client.user.createdTimestamp/1000)}:R>\n`+
  `機器人邀請連結：自行填寫\n`+
  `機器人版本：自行填寫\n`+
  `機器人所在伺服器數量：${client.guilds.cache.size}\n`+
  `機器人上線時間：${msToHMS(client.uptime)}`)
}

export const GuildInfo = async (ctx: any) => {
  await ctx.editReply(`伺服器名稱：${ctx.guild.name}\n` +
  `伺服器ＩＤ：${ctx.guild.id}\n` +
  `伺服器創建時間：<t:${~~(ctx.guild.createdTimestamp/1000)}:R>\n` +
  `伺服器簡介：${ctx.guild.description ?? "無"}\n` + 
  `伺服器擁有者：<@${ctx.guild.ownerId}>\n` +
  `伺服器人數：${ctx.guild.memberCount}\n`)
}
