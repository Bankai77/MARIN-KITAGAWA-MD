let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://s96-ious.freeconvert.com/task/66ab36e8d6b14931a5b2a66c/YUNGBLUD_Abyss_from_Kaiju_No_8_Official_Lyric_Video_LYabT4zZnJQ.webm'
  let url = 'https://github.com/Bankai77/KITAGAWA-MD'
  let murl = 'https://youtu.be/Z8lRhKH6ClE?si=U5oEtIG2vD1PWNZt'
  let img = 'https://images3.alphacoders.com/120/thumb-1920-1203462.jpg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [100, 0, 100, 0, 100, 0, 100],
    fileName: 'shizo',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: `I'm Alive, Darling! 😇`,
        body: 'ᴋɪᴛᴀɢᴀᴡᴀ ᴛʜᴇ ᴀɴɪᴍᴇ ʙᴏᴛ',
        thumbnailUrl: img,
        sourceUrl: 'https://chat.whatsapp.com/Hz5C06OZVkhLQ2vA3kp6GX',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
