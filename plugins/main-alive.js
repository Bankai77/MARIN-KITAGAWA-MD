let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://eu-central.storage.cloudconvert.com/tasks/f3e46cd3-43a6-4938-b61c-91384eebf407/Sugarcrush2.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240729%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240729T070834Z&X-Amz-Expires=86400&X-Amz-Signature=2266fd90052cafbaf9ef1d4f96c7ff49b850ad241d127bacfeecc53d5dcfe4a2&X-Amz-SignedHeaders=host&response-content-disposition=inline%3B%20filename%3D%22Sugarcrush2.mp3%22&response-content-type=audio%2Fmpeg&x-id=GetObject'
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
